"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <Image
        src={"/logo.png"}
        width={1000}
        height={1000}
        alt="logo"
        className="size-32"
      />
    </nav>
  );
};

export default Navbar;
