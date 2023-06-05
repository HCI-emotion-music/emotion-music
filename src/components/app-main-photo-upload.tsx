import React, { useState, ChangeEvent } from 'react';
import { PhotoIcon } from "@heroicons/react/24/solid";

interface AppMainPhotoUploadProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


const AppMainPhotoUpload: React.FC<AppMainPhotoUploadProps> = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);
  };

  return (
    <div>
      <label htmlFor="cover-photo" className="block text-xl/2 font-medium leading-6 text-gray-900">
        Upload Photo
      </label>

      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon
            className="mx-auto h-12 text-gray-300"
            area-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={onChange}
              />
            </label>
            <p className="pl-1"> or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppMainPhotoUpload;
