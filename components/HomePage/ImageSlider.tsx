"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = ({ imageUrls }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Create an interval that updates the currentIndex every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [imageUrls]);

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
