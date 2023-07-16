"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="hidden max-md:block hover:border-neutral-50 hover:border pt-1 px-2 rounded-md"
        type="button"
        onClick={toggleMenu}
      >
        <Image
          src="/menu.svg"
          alt="Menu"
          width={32}
          height={32}
          className="mt-1 dark:invert"
        />
      </button>
      {isMenuOpen && (
        <div className="absolute top-10 right-0 bg-white dark:invert shadow-md rounded-md p-4 md:hidden">
          <ul>
            <li>
              <Link href="/about" className="hover:underline text-black">
                <p>About</p>
              </Link>
            </li>
            <hr className="my-2 dark:border-gray-600" />
            <li>
              <a
                href="https://www.spacex.com/"
                target="_blank"
                className="hover:underline text-black text-md"
              >
                SpaceX Official Website
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
