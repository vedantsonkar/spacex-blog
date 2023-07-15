import Link from "next/link";
import CoverImage from "./CoverImage";

interface HeroBannerProps {
  title: string;
  description: string;
  image_urls: string[];
  slug: string;
  dimensions?: {
    height: {
      meters: number;
      feet: number;
    };
    diameter: {
      meters: number;
      feet: number;
    };
    mass: {
      kg: number;
      lb: number;
    };
  };
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  image_urls,
  slug,
  dimensions,
}) => {
  return (
    <div className="h-[50rem] w-full max-md:flex max-md:flex-col max-md:items-center md:w-[90%] md:rounded-xl">
      <div className="max-md:relative h-[30rem] w-full md:w-[90%]">
        <Link as={`/rockets/${slug}`} href="/posts/[slug]" aria-label={title}>
          <CoverImage title={title} images={image_urls} slug={slug} />
        </Link>
      </div>
      <div className="md:z-10 absolute md:left-8 max-md:static max-md:mx-4 dark:bg-black dark:md:bg-opacity-80 md:bg-opacity-80 max-md:w-full md:max-w-lg p-8 md:rounded-xl md:top-1/2 bg-white">
        <h3 className="mb-3 text-3xl font-bold leading-tight tracking-tighter text-left md:mb-0 md:text-5xl dark:text-white">
          {title}
        </h3>
        <div className="mb-4 text-left md:mb-0 md:text-lg dark:text-white">
          <p>{description}</p>
        </div>
      </div>
      {dimensions && (
        <div className="md:z-10 absolute md:right-8 max-md:static max-md:mx-4 dark:bg-black dark:md:bg-opacity-80 md:bg-opacity-80 max-md:w-full md:max-w-lg p-8 md:rounded-xl md:top-1/4 bg-white">
          <h3 className="mb-3 text-3xl font-bold leading-tight tracking-tighter text-left md:mb-0 md:text-5xl dark:text-white">
            Dimensions
          </h3>
          <div className="mb-4 text-left md:mb-0 md:text-lg dark:text-white">
            <p>Height: {dimensions?.height.meters} meters</p>
            <p>Diameter: {dimensions?.diameter.meters} meters</p>
            <p>Mass: {dimensions?.mass.kg} kg</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
