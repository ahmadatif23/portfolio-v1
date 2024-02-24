import Image from "next/image";

import Tooltips from "../Tooltip";

export default function JobDescription({ experience }) {
  return (
    <>
      <div className="flex sm:flex-row flex-col items-center sm:mb-3 mb-2 text-slate-700 sm:text-3xl text-xl font-semibold sm:gap-3">
        <p className="hover:text-sky-700">{experience.position}</p>
        <span className="flex-shrink-0 h-2 w-2 bg-slate-500 rounded-full sm:flex hidden"></span>
        <p className="sm:text-slate-700 text-slate-500 hover:text-sky-700">
          {experience.company}
        </p>
      </div>

      <p className="sm:text-lg text-sm sm:font-semibold font-medium text-slate-500 mb-3">
        {experience.period}
      </p>

      <div className="max-w-3xl sm:text-base text-sm flex flex-col items-center text-center gap-4">
        <p>{experience.desc}</p>
      </div>

      <div className="max-w-3xl grid sm:grid-cols-6 grid-cols-3 gap-4 w-full sm:justify-between justify-center items-center text-center mt-10">
        {experience.stacks?.map((stack) => (
          <div
            key={stack}
            className="sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group"
          >
            <Image
              src={`/portfolio-v1/logo/${stack}.svg`}
              alt={`${stack} logo`}
              fill
              className="relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition"
            />
            <Tooltips title={stack.toUpperCase()} />
          </div>
        ))}
      </div>
    </>
  );
}
