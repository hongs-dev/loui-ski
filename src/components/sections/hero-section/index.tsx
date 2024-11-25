import React from "react";
import Navbar from "../navbar";
import { HERO, Services } from "@/constants/Contents";
import { VIEW_IMAGES } from "@/constants/ImageUrls";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiNaver } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

const HeroSection = () => {
  const formattedHeading = HERO.heading.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (
    <div className="p-5 col-span-1">
      <Navbar />
      <h1 className="text-4xl lg:text-7xl font-bold text-neutral-800 tracking-tight">
        {formattedHeading}
      </h1>
      <ul className="mt-5 lg:mt-10 space-y-3">
        {Services.map((service, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CircleCheck size={24} className="text-green-500" />
            <p className="text-base lg:text-xl text-neutral-600">{service}</p>
          </li>
        ))}
      </ul>

      <div className="w-full mt-8 lg:mt-24">
        <Button className="bg-[#00DE5A] text-neutral-800 font-medium hover:bg-[#009E40] w-full py-6">
          <Link
            href="https://smartstore.naver.com/loui_ski/products/11132264287"
            target="_blank"
            className="flex justify-center items-center"
          >
            <SiNaver className="mr-2" />
            네이버로 예약하기
          </Link>
        </Button>
        <Button className=" w-full py-6 mt-3" variant="outline">
          <Link
            href="tel:01093149710"
            className="flex justify-center items-center"
          >
            <IoCall className="mr-2" />
            무료 전화상담: 010-9314-9710
          </Link>
        </Button>
      </div>

      <div className="space-y-3 mt-10 w-full">
        <div className="flex justify-between w-full gap-4 overflow-y-scroll lg:overflow-hidden">
          {VIEW_IMAGES.map((image) => (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alt}
              key={image.alt}
              className="object-cover w-full h-[240px] rounded-xl shadow-lg shadow-main-pink hover:scale-110 duration-500"
            />
          ))}
        </div>
        <p className="text-neutral-600">
          유아, 아이 전문 강사진들이 안전하게 교육을 진행합니다
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
