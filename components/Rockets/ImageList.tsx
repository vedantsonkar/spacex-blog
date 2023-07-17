"use client";
import Image from "next/image";
import { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface ImageListComponentProps {
  imageUrls?: string[];
}

const ImageListComponent: React.FC<ImageListComponentProps> = ({
  imageUrls,
}) => {
  if (imageUrls === undefined)
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton
          style={{ width: "100%", height: "25rem", borderRadius: "5rem" }}
        />
      </SkeletonTheme>
    );
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
      <div className="mb-8 w-full gap-x-1 gap-y-1 sm:gap-x-2 sm:gap-y-2 max-md:mt-4 flex-wrap flex text-center md:text-left">
        {restImageUrls.map((url, index) => (
          <div className="relative w-1/2 pt-[50%] side-images" key={index}>
            <Image src={url} alt="image" fill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageListComponent;
