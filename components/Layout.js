import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [page, setPage] = useState(true);

  const handlePage = (path) => {
    if (router.pathname !== path) setPage(false);

    setTimeout(() => {
      if (router.pathname !== path) router.push(path);
    }, 400);
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      setTimeout(() => {
        setPage(true);
      }, 300);
    };

    // Subscribe to the event
    router.events.on('routeChangeStart', handleRouteChange);

    // Cleanup the subscription when the component is unmounted
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events])

  return (
    <>
      <div className="w-full min-h-screen flex flex-col relative select-none">
        <Navbar onHandlePage={handlePage} />
        <div className="flex-1 w-full relative">
          <div
            className={
              "absolute top-0 flex h-full w-full justify-center px-6 xl:px-0 transform transition-all duration-500 " +
              (page ? "left-0" : "-left-full")
            }
          >
            <div className="max-w-5xl w-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
