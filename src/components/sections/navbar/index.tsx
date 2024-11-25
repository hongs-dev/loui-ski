"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="mb-10 flex justify-between">
      <div className="flex items-center">
        <Image
          src={"/logo.png"}
          width={1000}
          height={1000}
          alt="logo"
          className="size-16"
        />
        <p className="text-xl font-bold">루이스키</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant="outline" size="icon" className="rounded-full">
          <Link href="https://www.instagram.com/loui_ski2/" target="_blank">
            <BsInstagram size={32} />
          </Link>
        </Button>
        <p>@loui_ski2</p>
      </div>
    </nav>
  );
};

export default Navbar;
