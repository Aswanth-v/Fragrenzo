import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { categoryOptionsMap, brandOptionsMap } from "../config/RegisterformControlls"; // ✅ update path

const ShopProductCard = ({
  product,
  cartItems = [],
  handleAddToCart,
  handleBuyNow,
  handleGetProductDetails,
}) => {
  if (!product) return null;

  // ✅ Find quantity of this product already in the cart
  const matchedCartItem = cartItems.find(
    (item) => item.productId === product._id
  );
  const quantityInCart = matchedCartItem?.quantity || 0;

  const isOutOfStock = product?.stock <= 0;
  const isLimitReached = quantityInCart >= product?.stock;

  // Determine stock label and color
  const getStockMessage = () => {
    if (isOutOfStock) {
      return (
        <span className="text-sm font-medium text-red-600">Out of Stock</span>
      );
    } else if (product.stock < 10) {
      return (
        <span className="text-sm font-medium text-green-600">
          Limited Stock ({product.stock} left)
        </span>
      );
    } else {
      return (
        <span className="text-sm font-medium text-green-600">In Stock</span>
      );
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-secondary shadow-sm hover:shadow-md transition-shadow duration-300 border border-muted">
      {/* Product Image */}
      <div className="relative" onClick={() => handleGetProductDetails(product?._id)}>
        <img
          src={product?.image}
          alt={product?.title || "Product image"}
          className="w-full h-[250px] object-cover rounded-t-2xl"
        />
      </div>

      {/* Product Info */}
      <CardContent className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-900 truncate">
          {brandOptionsMap[product?.title] || product?.brand}
        </h2>

        <p className="text-sm text-gray-500">{product?.volume}-ml</p>

        <p className="text-xs text-muted-foreground">
          Category: {categoryOptionsMap[product?.category] || product?.category}
        </p>

        <div className="flex items-center justify-between">
          {product?.salePrice ? (
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 line-through">
                ₹{product?.price}
              </span>
              <span className="text-lg font-semibold text-green-600">
                ₹{product?.salePrice}
              </span>
            </div>
          ) : (
            <span className="text-lg font-semibold text-gray-800">
              ₹{product?.price ?? "N/A"}
            </span>
          )}

          {/* Stock Message */}
          {getStockMessage()}
        </div>
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex justify-between gap-2 px-4 pb-4">
        <Button
          onClick={() => handleAddToCart(product?._id)}
          disabled={isOutOfStock || isLimitReached}
          className="w-full text-sm"
        >
          {isLimitReached ? `Max Added (${quantityInCart})` : "Add to Cart"}
        </Button>

        <Button
          onClick={() => handleBuyNow(product)}
          disabled={isOutOfStock}
          variant="secondary"
          className="w-full text-sm"
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShopProductCard;
