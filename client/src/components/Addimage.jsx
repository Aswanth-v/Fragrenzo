import React, { Fragment, useRef } from 'react'
import { Input } from "../components/ui/input"; // if navigating up a level

import { Label } from "../components/ui/label";
import { UploadCloudIcon } from 'lucide-react';
const Addimage = ({imageFile,setImageFile,imageurl,setImageUrl}) => {
    const inputRef=useRef(null)

    const imageFileChange=(event)=>{
        console.log(event.target.files);
          const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
        
    }
  return (
    <div className='w-full max-w-md mx-auto'>
        <Label className='tetx-lg font-semibold mb-2 block'>image upload</Label>
        <div className='border-2 border-dotted rounded-lg p-4 mt-4'>
            <Input
          id="image-upload"
          type="file"
          className='hidden'
          ref={inputRef}
          onChange={imageFileChange}
          
        />
   {
  !imageFile ? (
    <Label
      htmlFor="image-upload"
      className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded"
    >
      <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
      <span>Drag & Drop or Add by Click</span>
    </Label>
  ) : (
    <div>
    </div>
  )
}

        </div>
    </div>
  )
}

export default Addimage