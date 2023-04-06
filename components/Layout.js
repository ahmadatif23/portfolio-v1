import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex w-full justify-center px-6 xl:px-0">
                <div className="max-w-5xl w-full">{ children }</div>
            </div>
        </div>
    </>
  )
}
