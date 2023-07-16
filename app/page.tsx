"use client";
import SearchComponent from "@/components/HomePage/Search";
import HeroBanner from "@/components/HomePage/Banner";
import { RocketProps } from "@/interface/RocketProps";
import Link from "next/link";
import ImageSlider from "@/components/HomePage/ImageSlider";
import { useRocketContext } from "@/context/rocketsContext";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const { rockets, loading } = useRocketContext();
  const [filteredRockets, setFilteredRockets] =
    useState<RocketProps[]>(rockets);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-[50rem] md:relative md:w-[90%] md:my-10 md:hover:scale-105 transition-transform duration-200 delay-200 md:shadow-xl hover:md:shadow-2xl">
        {rockets.length < 1 ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton style={{ width: "100%", height: "100%" }} />
          </SkeletonTheme>
        ) : (
          <HeroBanner />
        )}
      </div>

      {!loading && (
        <div className="w-full bg-gradient-radial">
          <SearchComponent setFilteredRockets={setFilteredRockets} />
        </div>
      )}

      <div className="mb-8 max-md:mt-4 grid text-center sm:grid-cols-2 md:mb-0 md:grid-cols-3 lg:grid-cols-4 md:text-left lg:p-24">
        {filteredRockets.length < 1 && !loading ? (
          <h1 className="text-4xl self-center justify-self-center">
            Nothing to show here ...
          </h1>
        ) : (
          filteredRockets.map((rocket) => (
            <Link
              as={`/rockets/${rocket.id}`}
              href="/rockets/[slug]"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              key={rocket.id}
            >
              <div className="relative h-32 w-full">
                {loading ? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton style={{ width: "100%", height: "100%" }} />
                  </SkeletonTheme>
                ) : (
                  <ImageSlider imageUrls={rocket.flickr_images} />
                )}
              </div>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {rocket.name ?? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton style={{ width: "100%", height: "100%" }} />
                  </SkeletonTheme>
                )}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {rocket.description ?? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton count={3} />
                  </SkeletonTheme>
                )}
              </p>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
