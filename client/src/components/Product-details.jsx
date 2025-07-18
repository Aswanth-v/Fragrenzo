import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../hooks/use-toast";
import { setProductDetails } from "../redux/Shop/product-slice";

function ProductDetails({ open, setOpen, productDetails,cartItems=[],product }) {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { user } = useSelector((state) => state.auth);

  function handleDialogClose() {
    setOpen(false);
    dispatch(setProductDetails());
  }

  function handleAddToCart(productId, totalStock) {
    toast({
      title: "Added to cart (demo action)",
    });

    // TODO: Add actual add-to-cart logic here
  }

  function handleBuyNow() {
    toast({
      title: "Buy Now clicked (demo action)",
    });
  }

  if (!productDetails) return null;

  const {
    title,
    description,
    image,
    price,
    salePrice,
    volume,
    brand,
    category,
    stock,
  } = productDetails;



  const stockLabel = () => {
    if (stock === null)
      return <span className="text-red-600 font-semibold">Out of Stock</span>;
    if (typeof stock === "number" && stock < 10)
      return (
        <span className="text-yellow-600 font-semibold">
          Only {stock} left!
        </span>
      );
    if (typeof stock === "number" && stock >= 10)
      return (
        <span className="text-green-600 font-semibold">In Stock</span>
      );
    return (
      <span className="text-muted-foreground font-medium">Stock not available</span>
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:p-10 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] bg-background rounded-xl shadow-2xl">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl border bg-white">
          <img
            src={image}
            alt={title}
            className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold text-primary">{brand || "Unnamed Product"}</h1>

            <p className="text-muted-foreground text-base leading-relaxed">
              {description?.trim() ? description : "No description available."}
            </p>

            <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
              <p><span className="font-semibold text-gray-800">Brand:</span> {brand || "N/A"}</p>
              <p><span className="font-semibold text-gray-800">Category:</span> {category || "N/A"}</p>
              <p><span className="font-semibold text-gray-800">Volume:</span> {volume ? `${volume}ml` : "N/A"}</p>
            
            </div>

            {/* PRICE */}
            <div className="flex items-center gap-4 mt-3">
              {salePrice ? (
                <>
                  <span className="text-xl font-semibold line-through text-gray-400">
                    ₹{price}
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{salePrice}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-primary">
                  ₹{price ?? "N/A"}
                </span>
              )}
            </div>

            {/* STOCK STATUS */}
            <div>{stockLabel()}</div>
          </div>

          <Separator />

          {/* BUTTONS */}
          <div className="flex flex-col gap-3">
            {stock === 0 ? (
              <Button disabled className="w-full opacity-60">
                Out of Stock
              </Button>
            ) : (
              <>  
              
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetails;
