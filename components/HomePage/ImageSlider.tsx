"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = ({ imageUrls }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls?.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [imageUrls]);

  if (!Array.isArray(imageUrls) || imageUrls.length <= 0) {
    return null;
  }
  return (
    <Image
      src={imageUrls[currentIndex]}
      alt="Image"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default ImageSlider;
