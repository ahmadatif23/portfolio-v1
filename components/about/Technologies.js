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
    <div className="grid sm:grid-cols-6 grid-cols-2 gap-4 w-full sm:justify-between justify-center items-center text-center mt-10">
      {technologies?.map((technology) => (
        <div key={technology} className="sm:w-28 sm:h-28 w-20 h-20 mx-auto relative group">
          <Image
            src={`/portfolio/logo/${technology}.svg`}
            alt="technology logo"
            fill
            className="relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition"
          />
          <Tooltips title={technology.toUpperCase()} />
        </div>
      ))}
    </div>
  );
}
