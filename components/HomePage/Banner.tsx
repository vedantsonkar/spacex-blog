import Link from "next/link";
import CoverImage from "./CoverImage";
import { useRocketContext } from "@/context/rocketsContext";
import { RocketProps } from "@/interface/RocketProps";

const HeroBanner: React.FC = () => {
  const getRandomIndex = (array: RocketProps[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  };
  const { rockets, loading } = useRocketContext();
  const data = loading ? null : rockets[getRandomIndex(rockets)];
  return (
    <div className="h-[50rem] w-full max-md:flex max-md:flex-col max-md:items-center md:w-[90%] md:rounded-xl">
      <div className="max-md:relative h-[30rem] w-full md:w-[90%]">
        <Link
          as={`/rockets/${data?.id}`}
          href="/posts/[slug]"
          aria-label={data?.name}
        >
          <CoverImage images={data?.flickr_images} />
        </Link>
      </div>
      <div className="md:z-10 absolute md:left-8 max-md:static max-md:mx-4 dark:bg-black dark:md:bg-opacity-80 md:bg-opacity-80 max-md:w-full md:max-w-lg p-8 md:rounded-xl md:top-1/2 bg-white">
        <h3 className="mb-3 text-3xl font-bold leading-tight tracking-tighter text-left md:mb-0 md:text-5xl dark:text-white">
          {data?.name}
        </h3>
        <div className="mb-4 text-left md:mb-0 md:text-lg dark:text-white">
          <p>{data?.description}</p>
        </div>
      </div>
      {data?.height && data.diameter && data.mass && (
        <div className="md:z-10 absolute md:right-8 max-md:static max-md:mx-4 dark:bg-black dark:md:bg-opacity-80 md:bg-opacity-80 max-md:w-full md:max-w-lg p-8 md:rounded-xl md:top-1/4 bg-white">
          <h3 className="mb-3 text-3xl font-bold leading-tight tracking-tighter text-left md:mb-0 md:text-5xl dark:text-white">
            Dimensions
          </h3>
          <div className="mb-4 text-left md:mb-0 md:text-lg dark:text-white">
            <p>Height: {data?.height.meters} meters</p>
            <p>Diameter: {data?.diameter.meters} meters</p>
            <p>Mass: {data?.mass.kg} kg</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
