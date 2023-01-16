import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="object-cover"
            height={50}
            width={50}
            src="/assets/images/rv.png"
            alt="logo"
          />
        </Link>
        <div>Rohit CMS</div>
      </div>
      <div>
        <Link
          href={"/"}
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Sign up to the university of code
        </Link>
      </div>
    </header>
  );
};

export default Header;
