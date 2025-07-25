import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from '../redux/Shop/Cart-slice';
import { useToast } from "../hooks/use-toast"

const UserCartItemsContent = ({ cartItem }) => {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { productList } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handleUpdateQuantity(getCartItem, typeOfAction) {
    const getCartItems = cartItems.items || [];

    // Only check stock if trying to increment
    if (typeOfAction === "plus") {
      const indexOfCurrentCartItem = getCartItems.findIndex(
        (item) => item.productId === getCartItem?.productId
      );

      const matchedProduct = productList.find(
        (product) => product._id === getCartItem?.productId
      );

      if (!matchedProduct) {
        toast({
          title: "Product not found",
          variant: "destructive",
        });
        return;
      }

      const getTotalStock = matchedProduct.totalStock || matchedProduct.stock || 0;

      if (indexOfCurrentCartItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;

        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }

    dispatch(
      updateCartQuantity({
        userId: user?.id,
        productId: getCartItem?.productId,
        quantity:
          typeOfAction === "plus"
            ? getCartItem?.quantity + 1
            : getCartItem?.quantity - 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item updated successfully",
        });
      }
    });
  }

  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item deleted successfully",
        });
      }
    });
  }

  const matchedProduct = productList.find(
    (product) => product._id === cartItem?.productId
  );
  const stock = matchedProduct?.totalStock || matchedProduct?.stock || 0;

  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItem?.title}</h3>

        {/* Stock badge */}
        {stock === 0 ? (
          <span className="text-red-500 font-semibold text-xs">Out of Stock</span>
        ) : stock <= 5 ? (
          <span className="text-yellow-600 font-semibold text-xs">
            Only {stock} left!
          </span>
        ) : null}

        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            disabled={cartItem?.quantity === 1}
            onClick={() => handleUpdateQuantity(cartItem, "minus")}
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>

          <span className="font-semibold">{cartItem?.quantity}</span>

          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            onClick={() => handleUpdateQuantity(cartItem, "plus")}
            disabled={cartItem?.quantity >= stock}
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p
          className={`font-semibold ${
            stock === 0 ? "text-gray-400 line-through" : ""
          }`}
        >
          ₹
          {(
            (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
            cartItem?.quantity
          ).toFixed(2)}
        </p>
        <Trash
          onClick={() => handleCartItemDelete(cartItem)}
          className="cursor-pointer mt-1"
          size={20}
        />
      </div>
    </div>
  );
};

export default UserCartItemsContent;
