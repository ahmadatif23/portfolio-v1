import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SocialMedia() {
  // don't forget to add resume
  const socialMedias = [
    { name: "linkedin", href: "https://www.linkedin.com/in/ahmadatif23/" },
    { name: "github", href: "https://github.com/ahmadatif23" },
  ];

  return (
    <div className="flex items-center sm:justify-start justify-center gap-6 sm:mt-0 mt-10">
      {socialMedias.map((socialMedia) => (
        <Link
          key={socialMedia.name}
          target="_blank"
          href={socialMedia.href}
          className="h-16 w-16 flex items-center justify-center rounded-full border-2 relative group overflow-hidden backdrop-opacity-90 backdrop-blur-sm"
        >
          <Image
            src={`/portfolio/social/${socialMedia.name}.svg`}
            width={30}
            height={30}
            alt="brand logo"
            className="group-hover:scale-125 transition-all duration-300 z-10"
          />
        </Link>
      ))}
    </div>
  );
}
