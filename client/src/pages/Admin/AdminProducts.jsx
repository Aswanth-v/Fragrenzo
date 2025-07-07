import { Button } from "../../components/ui/button";
import React, { Fragment, useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "../../components/ui/sheet";
import Form from "../../components/ui/Form";
import { addFragrensFormElements } from "../../config/RegisterformControlls";
import Addimage from "../../components/Addimage.jsx";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};
const AdminProducts = () => {
  const [productDialoge, setProdutDialoge] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile,setImageFile]=useState(null)
  const [imageurl,setImageUrl]=useState('')
  const [imageLoadingState, setImageLoadingState] = useState(false);

  const onSubmit = () => {};
  return (
    <Fragment>
      <div className="mb-b w-full flex justify-end">
        <Button onClick={() => setProdutDialoge(true)}>Add-Products</Button>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4"></div>
        <Sheet
          open={productDialoge}
          onOpenChange={() => {
            setProdutDialoge(false);
          }}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>Add-Products</SheetHeader>
<Addimage
  imageFile={imageFile}
  setImageFile={setImageFile}
  imageurl={imageurl}
  setImageUrl={setImageUrl}
  imageLoadingState={imageLoadingState}
 setImageLoadingState={setImageLoadingState}
/>

            <div className="py-6">
         <Form
              onSubmit={onSubmit}
              formdata={addFragrensFormElements} // ✅ field config
              data={formData}                   // ✅ current form state
              setData={setFormData}             // ✅ state updater
              buttonText="Add"
            />

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProducts;
