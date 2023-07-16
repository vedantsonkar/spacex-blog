import ImageSlider from "./ImageSlider";

type Props = {
  images?: string[];
};

const CoverImage = ({ images }: Props) => {
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
