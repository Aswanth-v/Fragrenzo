import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const ProductCard = ({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) => {
  if (!product) return null;

  const handleEdit = () => {
    setOpenCreateProductsDialog(true);
    setCurrentEditedId(product._id);
    setFormData(product);
  };

  return (
    <Card className="w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product?.image}
          alt={product?.title || "Product image"}
          className="w-full h-[250px] object-cover"
        />
      </div>

      {/* Product Info */}
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {product?.brand}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {product?.volume}-ml
        </p>

        <div className="flex items-center justify-between mt-3">
          {product?.salePrice ? (
            <div className="flex flex-col">
              <span className="text-sm line-through text-gray-400">
                ${product?.price}
              </span>
              <span className="text-base font-semibold text-green-600">
                ${product?.salePrice}
              </span>
            </div>
          ) : (
            <span className="text-base font-medium text-gray-800">
              ₹{product?.price ?? "N/A"}
            </span>
          )}

          <span
            className={`text-sm font-medium ${
              product?.stock && product.stock > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product?.stock && product.stock > 0
              ? "Stock Available"
              : "Out of Stock"}
          </span>
        </div>
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex justify-end gap-3 px-4 pb-4">
        <Button
          variant="outline"
          onClick={handleEdit}
          className="text-sm px-4 py-2"
        >
          Edit
        </Button>
        <Button
          variant="destructive"
          onClick={() => handleDelete(product._id)}
          className="text-sm px-4 py-2"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
