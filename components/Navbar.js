import Image from "next/image";
import { useState } from "react";
import ContactModal from "./_shared/ContactModal";

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

  return (
    <>
      <div className="top-0 z-20 flex w-full items-center justify-center bg-transparent px-6 py-7 sm:fixed xl:px-0">
        <div className="flex w-full max-w-7xl justify-between">
          <button
            href="/"
            onClick={(e) => handlePage(e, "/")}
            className="relative h-12 w-12 transition-all duration-1000 hover:rotate-[360deg] hover:scale-105 hover:brightness-90"
          >
            <Image src="/portfolio-v1/brand.svg" fill alt="brand logo" />
          </button>

          <div className="hidden items-center gap-7 sm:flex">
            <ul className="flex items-center gap-7 font-medium">
              {links?.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={(e) => handlePage(e, link.href)}
                    className="text-slate-600 transition-all duration-300 hover:text-sky-600"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <ContactModal />
          </div>

          <div className="absolute right-0 top-0 z-10 flex items-center sm:hidden">
            <div className="px-6 py-7">
              <div className="flex h-14 items-center justify-end">
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
                      className="h-6 w-6"
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
                      className="h-6 w-6"
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
            <div className="flex h-full w-full flex-col justify-center">
              <div className="mt-10 flex items-center justify-center">
                <button
                  href="/"
                  onClick={(e) => handlePage(e, "/", "link")}
                  className="relative h-12 w-12"
                >
                  <Image src="/portfolio/brand.svg" fill alt="brand logo" />
                </button>
              </div>

              <div className="flex w-full flex-1 items-center justify-center">
                <div className="flex flex-col items-center gap-7 px-7">
                  <ul className="flex flex-col items-center gap-7">
                    {links?.map((link) => (
                      <li key={link.id + "sm"}>
                        <button
                          onClick={(e) => handlePage(e, link.href, "link")}
                          className="text-slate-600 transition-all duration-300 hover:text-sky-600"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <ContactModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
