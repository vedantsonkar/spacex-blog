"use client";
import ImageListComponent from "@/components/Rockets/ImageList";
import RocketDetails from "@/components/Rockets/RocketDetails";
import { useRocketContext } from "@/context/rocketsContext";
import { RocketProps } from "@/interface/RocketProps";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Rocket() {
  const pathname = usePathname();
  const { rockets, loading } = useRocketContext();
  const [rocket, setRocket] = useState<any>({});
  function extractRocketIdFromUrl(url: string): string {
    return url.replace("/rockets/", "");
  }

  function findRocketById(
    id: string,
    rockets: RocketProps[]
  ): RocketProps | undefined {
    return rockets.find((rocket) => rocket.id === id);
  }

  const handleSearch = () => {
    const rocketId = extractRocketIdFromUrl(pathname);
    setRocket(findRocketById(rocketId, rockets));
  };

  useEffect(() => {
    handleSearch();
  }, [pathname, rockets]);

  if (!rocket && !loading) {
    return (
      <div className="mx-auto p-8 flex justify-center items-center">
        <h1 className="text-black md:text-4xl text-xl font-bold dark:invert">
          I think this rocket has already taken off our database...🚀
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-start py-4 justify-cetner w-full px-8 gap-x-6">
      <div className="side-images max-lg:w-full">
        <ImageListComponent imageUrls={rocket?.flickr_images} />
      </div>
      <div className="max-md:side-images">
        <RocketDetails rocket={rocket} />
      </div>
    </div>
  );
}
