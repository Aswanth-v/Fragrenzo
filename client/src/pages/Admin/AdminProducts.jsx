import { Button } from "../../components/ui/button";
import React, { Fragment, useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "../../components/ui/sheet";
import Form from "../../components/ui/Form";
import { addFragrensFormElements } from "../../config/RegisterformControlls";
import Addimage from "../../components/Addimage.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  editProduct,
  fetchProduct,
  deleteProduct,
} from "../../redux/Admin/Product-slice";
import { useToast } from "../../hooks/use-toast";
import ProductCard from "../../components/Product-Card";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  stock: "",
  volume: "",
  averageReview: 0,
};

const AdminProducts = () => {
  const [productDialoge, setProdutDialoge] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [imageurl, setImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const onSubmit = (event) => {
    event.preventDefault();

    if (editedId !== null) {
      dispatch(editProduct({ id: editedId, formData })).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchProduct());
          setFormData(initialFormData);
          setProdutDialoge(false);
          setEditedId(null);
          toast({
            title: "Product updated",
          });
        }
      });
    } else {
      dispatch(
        addNewProduct({
          ...formData,
          image: imageurl,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchProduct());
          setProdutDialoge(false);
          setImageFile(null);
          setImageUrl("");
          setFormData(initialFormData);
          toast({
            title: "Product added",
            variant: "success",
          });
        }
      });
    }
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const productDelete = (getCurrentProductId) => {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchProduct());
      }
    });
  };
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setProdutDialoge(true)}>Add-Products</Button>

        <Sheet
          open={productDialoge}
          onOpenChange={() => {
            setProdutDialoge(false);
            setEditedId(null);
            setFormData(initialFormData);
            setImageFile(null);
            setImageUrl("");
          }}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              {editedId ? "Edit Product" : "Add Product"}
            </SheetHeader>

            {/* ✅ Only show Addimage when NOT editing */}
            {editedId === null && (
              <Addimage
                imageFile={imageFile}
                setImageFile={setImageFile}
                imageurl={imageurl}
                setImageUrl={setImageUrl}
                imageLoadingState={imageLoadingState}
                setImageLoadingState={setImageLoadingState}
                imageLoadingStat={imageLoadingState}
                isediting={editedId !== null}
              />
            )}

            <div className="py-6">
              <Form
                onSubmit={onSubmit}
                formControls={addFragrensFormElements}
                formdata={formData}
                setFormdata={setFormData}
                buttonText={editedId ? "Edit" : "Add"}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
        {productList &&
          productList.length > 0 &&
          productList.map((productListItem) => (
            <ProductCard
              key={productListItem._id}
              product={productListItem}
              setEditedId={setEditedId}
              setProdutDialoge={setProdutDialoge}
              setFormData={setFormData}
              productDelete={productDelete}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default AdminProducts;
