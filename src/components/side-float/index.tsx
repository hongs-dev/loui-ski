"use client";
import { SIDE_FLOATS } from "@/constants/ImageUrls";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const SideFloat = () => {
  return (
    <div className="fixed right-10 bottom-10 z-50">
      <div className="flex flex-col gap-4">
        <TooltipProvider>
          {SIDE_FLOATS.map((sideFloat) => (
            <Tooltip key={sideFloat.alt}>
              <TooltipTrigger>
                <Link href={sideFloat.link} target="_blank">
                  <Image
                    src={sideFloat.url}
                    alt={sideFloat.alt}
                    width={sideFloat.width}
                    height={sideFloat.height}
                    className="w-16 h-16 rounded-2xl"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{sideFloat.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default SideFloat;
