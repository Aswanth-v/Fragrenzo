import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../redux/Shop/Cart-slice";
import { useToast } from "../hooks/use-toast";

function UserCartItemsContent({ cartItem }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item removed successfully",
          variant: "default",
        });
      }
    });
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4 shadow-sm bg-white dark:bg-zinc-900 transition-all hover:shadow-md">
      {/* Product Image */}
      <div className="w-20 h-20 shrink-0 rounded overflow-hidden">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {cartItem?.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Quantity: {cartItem?.quantity}
        </p>
      </div>

      {/* Price & Delete */}
      <div className="text-right space-y-2">
        <p className="font-bold text-primary text-md">
          $
          {(
            (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
            cartItem?.quantity
          ).toFixed(2)}
        </p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleCartItemDelete(cartItem)}
        >
          <Trash className="text-red-500 hover:text-red-700" size={20} />
          <span className="sr-only">Remove</span>
        </Button>
      </div>
    </div>
  );
}

export default UserCartItemsContent;
