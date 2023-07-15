import CoverImage from "@/components/HomePage/CoverImage";
import Image from "next/image";
import type { GetServerSideProps } from "next";
import SearchComponent from "@/components/HomePage/Search";
import HeroBanner from "@/components/HomePage/Banner";
import { Suspense } from "react";
import { RocketProps } from "@/interface/RocketProps";
import Link from "next/link";
import ImageSlider from "@/components/HomePage/ImageSlider";

async function getData() {
  const res = await fetch(`${process.env.PHP_BASE_URL}/rockets.php`);
  const apiData = await res.json();
  return apiData.data;
}

export default async function Home() {
  const getRandomIndex = (array: RocketProps[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  };

  const data: RocketProps[] = await getData();
  console.log("data", data);
  const heroPost = data[getRandomIndex(data)];
  const dimensions = {
    height: heroPost.height,
    diameter: heroPost.diameter,
    mass: heroPost.mass,
  };
  const remainingPosts = data.filter((post) => post.id !== heroPost.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-[50rem] md:relative md:w-[90%] md:my-10 md:hover:scale-105 transition-transform duration-200 delay-200 md:shadow-xl hover:md:shadow-2xl shadow-black dark:shadow-white md:rounded-xl">
        <HeroBanner
          title={heroPost.name}
          description={heroPost.description}
          image_urls={heroPost.flickr_images}
          slug={heroPost.id}
          dimensions={dimensions}
        />
      </div>

      <div className="w-full">
        <SearchComponent />
      </div>

      <div className="mb-8 max-md:mt-8 grid text-center sm:grid-cols-2 md:mb-0 md:grid-cols-3 lg:grid-cols-4 md:text-left p-24">
        {remainingPosts.map((post) => (
          <Link
            as={`/rockets/${post.id}`}
            href="/posts/[slug]"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            key={post.id}
          >
            <div className="relative h-32 w-full">
              <ImageSlider imageUrls={post.flickr_images} />
            </div>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {post.name}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
