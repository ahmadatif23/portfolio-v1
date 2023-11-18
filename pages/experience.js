import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import JobDescription from "@/components/experience/JobDescription";
import Meta from "@/components/Meta";

export default function Experience() {
  const experiences = [
    {
      company: "SOLS Foundation",
      position: "Web Developer",
      period: "September 2023 - Present",
      desc: "I specialize in developing front-end and back-end website applications, including setting up servers and databases for optimal functionality. My role involves ensuring the system quality and responsiveness of the applications, as well as fixing bugs to improve website usability. I have expertise in utilizing React to build dynamic and interactive web applications.",
      stacks: ["html", "css", "javascript", "react", "nextjs", "firebase"],
    },
    {
      company: "The Next Six Sdn Bhd",
      position: "Web Developer",
      period: "January 2023 - September 2023",
      desc: "I specialize in developing front-end and back-end website applications, including setting up servers and databases for optimal functionality. My role involves ensuring the system quality and responsiveness of the applications, as well as fixing bugs to improve website usability. I have expertise in utilizing React to build dynamic and interactive web applications.",
      stacks: ["html", "css", "javascript", "react", "nodejs", "mongodb"],
    },
    {
      company: "Ifcon Technology Sdn Bhd",
      position: "Web Developer",
      period: "October 2021 - January 2023",
      desc: "I specialized in crafting user-centered designs by thoroughly understanding business requirements and incorporating valuable user feedback. I actively integrated customer feedback, usage metrics, and usability findings to continuously enhance the user experience. Additionally, I took charge of designing and developing web platform modules such as input controls, navigational components, and informational elements.",
      stacks: ["html", "css", "javascript", "laravel", "tailwindcss", "bootstrap"],
    },
  ];
  return (
    <>
      <Meta title="Experience | Ahmad Atif" />

      <main className="w-full min-h-full relative">
        <section className="text-center sm:text-start sm:min-h-screen sm:pt-[112px] flex flex-col justify-center items-center sm:pb-10 py-5">
          <Swiper
            navigation={false}
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper w-full h-full !pb-16 cursor-pointer"
          >
            {experiences.map((experience) => (
              <SwiperSlide key={experience.company} className="!w-full !mr-0 !flex !flex-col !items-center">
                <JobDescription experience={experience} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  );
}
