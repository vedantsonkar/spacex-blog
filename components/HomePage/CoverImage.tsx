import Image from "next/image";
import ImageSlider from "./ImageSlider";

type Props = {
  title: string;
  images: string[];
  slug?: string;
};

const CoverImage = ({ title, images, slug }: Props) => {
  return (
    <ImageSlider
      imageUrls={images}
      fill
      style={{ objectFit: "cover" }}
      sizes="100%"
      priority
    />
  );
};

export default CoverImage;
