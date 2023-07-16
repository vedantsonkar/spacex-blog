"use client";
import Image from "next/image";
import { useEffect } from "react";

interface ImageListComponentProps {
  imageUrls?: string[];
}

const ImageListComponent: React.FC<ImageListComponentProps> = ({
  imageUrls,
}) => {
  if (imageUrls === undefined) return null;
  const [firstImageUrl, ...restImageUrls] = imageUrls;

  function getWidth() {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  }

  return (
    <div>
      {firstImageUrl && (
        <div className="relative h-[25rem] w-full mb-4">
          <Image src={firstImageUrl} alt="image" fill priority sizes="100vw" />
        </div>
      )}
      <div className="mb-8 gap-x-1 gap-y-1 sm:gap-x-2 sm:gap-y-2 max-md:mt-4 flex-wrap flex text-center md:text-left">
        {restImageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt="image"
            width={getWidth() < 425 ? 120 : 300}
            height={getWidth() < 425 ? 100 : 200}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageListComponent;
