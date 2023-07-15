import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight shadow-xl dark:invert w-full z-50 sticky">
      <div className="ml-8 md:ml-16">
        <Link
          href="/"
          className="hover:underline flex items-center gap-4 w-max"
        >
          <div className="relative h-16 w-16 md:h-32 md:w-32">
            <Image src="/spacex-logo.svg" alt="SpaceX" fill />
          </div>
          <p className="dark:invert">SpaceX</p>
        </Link>
      </div>
      <div className="flex items-center justify-end mr-8 md:mr-16 dark:invert">
        <Link href="/about" className="hover:underline">
          <p>About</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
