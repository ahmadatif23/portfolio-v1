import Meta from "@/components/Meta";
import SocialMedia from "@/components/index/SocialMedia";
import WaveText from "@/components/index/WaveText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Meta title="Ahmad Atif | Web Developer" />

      <main className="w-full h-full">
        <section className="w-full h-full text-center sm:text-start flex flex-col justify-center sm:pt-20">
          <p className="text-lg mb-4">Hi, my name is</p>

          <WaveText />

          <h1 className="md:text-6xl text-4xl font-bold leading-none mb-7 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-900 inline-block text-transparent bg-clip-text sm:h-16 h-20">
            I love creating things for webs.
          </h1>

          <p className="max-w-2xl mb-8 sm:block hidden">
            As a software engineer, I specialize in creating exceptional digital
            experiences and occasionally doing design work. While working with
            <Link
              href="https://www.sols247.org/"
              className="relative font-bold transition-all duration-200 hover:text-[#F8BE15]"
              target="_blank"
            >
              {" "}
              SOLS Foundation{" "}
            </Link>
            on education websites, I prioritize accessibility and user-centered
            design.
          </p>

          <p className="max-w-2xl mb-2 sm:hidden font-light">
            As a software engineer, I specialize in creating exceptional digital
            experiences and occasionally doing design work.
          </p>

          <p className="max-w-2xl mb-6 sm:hidden font-light">
            While working with{" "}
            <Link
              href="https://www.sols247.org/"
              className="relative font-bold transition-all duration-200 hover:text-[#F8BE15]"
              target="_blank"
            >
              {" "}
              SOLS Foundation{" "}
            </Link>
            on education websites, I prioritize accessibility and user-centered
            design.
          </p>

          <SocialMedia />
        </section>
      </main>
    </>
  );
}
