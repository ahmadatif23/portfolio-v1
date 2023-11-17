import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WaveText() {
  const ahmad = ["A", "h", "m", "a", "d"];
  const atif = ["A", "t", "i", "f"];

  return (
    <div className="flex items-center sm:gap-5 gap-2 sm:justify-start justify-center">
      <h1 className="flex md:text-8xl text-5xl font-bold leading-none mb-3">
        {ahmad.map((name, i) => (
          <span
            key={"ahmad_" + i}
            className="transition-all duration-700 hover:text-sky-700 sm:hover:-translate-y-3 hover:-translate-y-1"
          >
            {name}
          </span>
        ))}
      </h1>

      <h1 className="flex md:text-8xl text-5xl font-bold leading-none mb-3">
        {atif.map((name, i) => (
          <span
            key={"atif_" + i}
            className="transition-all duration-700 hover:text-sky-700 sm:hover:-translate-y-3 hover:-translate-y-1"
          >
            {name}
          </span>
        ))}
      </h1>
    </div>
  );
}
