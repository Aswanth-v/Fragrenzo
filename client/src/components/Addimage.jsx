import React, { Fragment, useEffect, useRef } from "react";
import { Input } from "../components/ui/input"; // if navigating up a level
import axios from "axios";
 
import { Label } from "../components/ui/label";
import { UploadCloudIcon } from "lucide-react";
import { FileIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";

const Addimage = ({ imageFile, setImageFile, imageurl, setImageUrl, setUploadedImageUrl, setImageLoadingState, }) => {
  const inputRef = useRef(null);

  const imageFileChange = (event) => {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);

  };
    const hadleDragover=(event)=> {
    event.preventDefault();
  }

  const hadleDrop=(event)=> {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

    const handleRemoveImage=()=> {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }
async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image",
      data
    );
    console.log(response, "response");

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className="w-full max-w-md mx-auto  mt-4">
      <Label className="tetx-lg font-semibold mb-2 block">image upload</Label>
      <div onDragOver={hadleDragover} onDrop={hadleDrop} className="border-2 border-dotted rounded-lg p-4 mt-4">
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={imageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & Drop or Add by Click</span>
          </Label>
        ) : (
           <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addimage;
