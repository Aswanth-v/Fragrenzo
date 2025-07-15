import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const ProductCard = ({
  product,
  setFormData,
  setProdutDialoge,
  setEditedId,
  productDelete,
}) => {
  if (!product) return null;

  const handleEdit = () => {
    setProdutDialoge(true);
    setEditedId(product._id);
    setFormData(product);
  };

  return (
    <Card className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-muted">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product?.image}
          alt={product?.title || "Product image"}
          className="w-full h-[250px] object-cover rounded-t-2xl"
        />
      </div>

      {/* Product Info */}
      <CardContent className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-900 truncate">
          {product?.brand}
        </h2>

        <div className="flex justify-between text-sm text-gray-500">
          <span>{product?.category}</span>
         
        </div>

        <div className="flex items-center justify-between">
          {product?.salePrice > 0 ? (
            <div className="flex flex-col">
              <span className="text-sm line-through text-gray-400">
                ₹{product?.price}
              </span>
              <span className="text-base font-semibold text-green-600">
                ₹{product?.salePrice}
              </span>
            </div>
          ) : (
            <span className="text-base font-medium text-gray-800">
              ₹{product?.price ?? "N/A"}
            </span>
          )}

          <span
            className={`text-sm font-medium ${
              product?.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product?.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </CardContent>

      {/* Admin Buttons */}
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
          onClick={() => productDelete(product._id)}
          className="text-sm px-4 py-2"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
