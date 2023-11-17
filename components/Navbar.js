import Image from "next/image";
import { useState } from "react";

export default function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const links = [
    { id: "about", name: "About", href: "/about" },
    { id: "experience", name: "Experience", href: "/experience" },
    // { id: "project", name: "Works", href: "/project" },
  ];

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handlePage = (e, path, type) => {
    e.preventDefault();
    type === "link" && setSidebar(false);
    props.onHandlePage && props.onHandlePage(path);
  };

  const handleContactMe = (e) => {
    e.preventDefault();
    props.onHandleContactMe && props.onHandleContactMe();
  };

  return (
    <>
      <div className="w-full flex py-7 px-6 xl:px-0 items-center justify-center sm:fixed top-0 z-10 bg-white">
        <div className="max-w-7xl w-full flex justify-between">
          <button
            href="/"
            onClick={(e) => handlePage(e, "/")}
            className="w-12 h-12 relative transition-all duration-1000 hover:brightness-90 hover:scale-105 hover:rotate-[360deg]"
          >
            <Image src="/portfolio/brand.svg" fill alt="brand logo" />
          </button>

          <div className="sm:flex hidden items-center gap-7">
            <ul className="flex items-center gap-7 font-medium">
              {links?.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={(e) => handlePage(e, link.href)}
                    className="transition-all text-slate-600 duration-300 hover:text-sky-600"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={handleContactMe}
              className="font-medium whitespace-nowrap transition-all duration-300 ease-in text-slate-600 hover:text-sky-600 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-0 z-10 flex sm:hidden items-center">
            <div className="px-6 py-7">
              <div className="h-14 flex items-center justify-end">
                <button
                  onClick={handleSidebar}
                  className={
                    "w-8 h-8 flex items-center justify-center transition-all duration-500 " +
                    (sidebar ? "rotate-90" : "rotate-0")
                  }
                >
                  {sidebar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={
              "absolute top-0 w-full h-screen bg-slate-200 bg-opacity-70 transition-all duration-400 ease-in-out overflow-hidden transform backdrop-blur-md " +
              (sidebar ? "left-0" : "-left-full")
            }
          >
            <div className="w-full h-full flex flex-col justify-center">
              <div className="flex items-center justify-center mt-10">
                <button
                  href="/"
                  onClick={(e) => handlePage(e, "/", "link")}
                  className="w-12 h-12 relative"
                >
                  <Image src="/portfolio/brand.svg" fill alt="brand logo" />
                </button>
              </div>

              <div className="flex-1 w-full flex justify-center items-center">
                <div className="flex flex-col items-center gap-7 px-7">
                  <ul className="flex flex-col items-center gap-7">
                    {links?.map((link) => (
                      <li key={link.id + "sm"}>
                        <button
                          onClick={(e) => handlePage(e, link.href, "link")}
                          className="transition-all text-slate-600 duration-300 hover:text-sky-600"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleContactMe}
                    className="font-medium whitespace-nowrap transition-all duration-300 ease-in text-slate-600 hover:text-sky-600 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
