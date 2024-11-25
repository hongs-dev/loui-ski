"use client";

import { MAIN_BG_URL } from "@/constants/ImageUrls";
import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

const MainImage = () => {
  return (
    <m.section className="col-span-1 p-5">
      <Image
        src={MAIN_BG_URL}
        width={4032}
        height={3024}
        alt="main-bg"
        className="h-full object-cover rounded-xl hover:scale-90 hover:rounded-none duration-500"
      />
    </m.section>
  );
};

export default MainImage;
