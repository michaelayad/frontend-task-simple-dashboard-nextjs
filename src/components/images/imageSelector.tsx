"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImageSelectorProps {
  initialImage?: string ; 
  onImageChange: (image: string | File | null) => void; 
  className?: string;
  label?: string;
}

const ImageSelector = ({
  initialImage,
  onImageChange,
  className,
  label,
}: ImageSelectorProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    initialImage || null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setSelectedImage(imageData);
        onImageChange(file);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      onImageChange(null);
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={clsx("mb-4", className)}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-primary">
          {label}
        </label>
      )}
      {selectedImage ? (
        <div className="relative w-full h-24">
          <Image
            src={selectedImage}
            alt="Selected"
            fill
            className="object-cover rounded-lg"
            onError={() => {
              setSelectedImage(null);
              onImageChange(null);
            }}
          />
          <button
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
              onImageChange(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
          >
            <span className="text-red-500">&times;</span>
          </button>
        </div>
      ) : (
        <div
          className="w-full h-24 border-2 border-dashed border-primary-lightest bg-gray-50 flex items-center justify-center cursor-pointer hover:border-primary transition-colors duration-200"
          onClick={handleBoxClick}
        >
          <span className="text-gray-500">Click to select an image</span>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSelector;
