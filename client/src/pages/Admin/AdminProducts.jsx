import { Button } from "../../components/ui/button";
import React, { Fragment, useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "../../components/ui/sheet";
import Form from "../../components/ui/Form";
import { addFragrensFormElements } from "../../config/RegisterformControlls";
import Addimage from "../../components/Addimage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, fetchProduct } from "../../redux/Admin/Product-slice";
import { useToast } from "../../hooks/use-toast"
import ProductCard from "../../components/Product-Card";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  averageReview: 0,
};
const AdminProducts = () => {
  const [productDialoge, setProdutDialoge] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile,setImageFile]=useState(null)
  const [imageurl,setImageUrl]=useState('')
  const [imageLoadingState, setImageLoadingState] = useState(false);
   const { productList } = useSelector(state => state.adminProducts); 
  const dispatch=useDispatch()
   const { toast } = useToast()
   

  
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addNewProduct({
      ...formData,
      image:imageurl
    })).then((data)=>{
      console.log(data);
      if(data?.payload?.success){
        dispatch(fetchProduct())
        setProdutDialoge(false)
        setImageFile(null)
        setFormData(initialFormData)
          toast({
            title: 'Product added',
            variant: "success",
          });
      }
    })
  }

  useEffect(()=>{
    dispatch(fetchProduct())
  },[dispatch])
  console.log(productList,imageurl);
  
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setProdutDialoge(true)}>Add-Products</Button>

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
 imageLoadingStat={imageLoadingState}
/>

            <div className="py-6">
         <Form
              onSubmit={onSubmit}
              formdata={addFragrensFormElements}
              data={formData}                  
              setData={setFormData}             
              buttonText="Add"
            />

            </div>
          </SheetContent>
        </Sheet>
      </div>
             <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
        {
  productList && productList.length > 0 ? (
    productList.map((productListItem) => (
      <ProductCard key={productListItem._id} product={productListItem} />
    ))
  ) : null
}

        </div>
    </Fragment>
  );
};

export default AdminProducts;
