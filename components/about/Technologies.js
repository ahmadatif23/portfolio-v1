import Image from "next/image";
import Tooltips from "@/components/Tooltip";
import React from "react";

export default function Technologies() {
  const technologies = [
    "html",
    "css",
    "javascript",
    "react",
    "nodejs",
    "mongodb",
  ];

  return (
    <div className="mt-10 grid w-full grid-cols-2 items-center justify-center gap-4 text-center sm:grid-cols-6 sm:justify-between">
      {technologies?.map((technology) => (
        <div key={technology} className="group relative mx-auto h-20 w-20 sm:h-28 sm:w-28">
          <Image
            src={`/portfolio-v1/logo/${technology}.svg`}
            alt={`${technology} logo`}
            fill
            className="relative z-10 transform bg-white grayscale transition group-hover:grayscale-0"
          />
          <Tooltips title={technology.toUpperCase()} />
        </div>
      ))}
    </div>
  );
}
