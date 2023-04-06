import { useState } from "react"

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  const handleOpen = () => {
    setMenu(!menu)
  }

  return (
    <>
      <div className="w-full flex py-7 px-6 xl:px-0 items-center justify-center">
        <div className="max-w-7xl w-full flex justify-between">
          <div className="w-14 h-14 border-2 rounded-full flex items-center justify-center"></div>

          <div className="sm:flex hidden items-center gap-7">
            <ul className="flex items-center gap-7">
              <li>About</li>
              <li>Experience</li>
              <li>Work</li>
            </ul>

            <button className="px-4 py-2 rounded-xl border-2 whitespace-nowrap">Contact Me</button>
          </div>

          <div className="absolute right-0 top-0 z-10 flex sm:hidden items-center">
            <div className="px-6 py-7">
              <div className="h-14 flex items-center justify-end">
                <button onClick={ handleOpen } className={ 'w-8 h-8 flex items-center justify-center transition-all duration-500 ' + (menu ? 'rotate-90' : 'rotate-0') }>
                  {
                    menu ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"> <path stroke-linecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" /> </svg>
                  }
                </button>
              </div>
            </div>
          </div>

          <div className={ 'absolute top-0 w-full h-screen bg-slate-200 bg-opacity-[96%] transition-all duration-700 ease-in-out overflow-hidden transform ' + (menu ? 'left-0' : '-left-full') }>
            <div className="w-full h-full flex flex-col justify-center">
              <div className="flex items-center justify-center mt-10">
                <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center"></div>
              </div>

              <div className="flex-1 w-full flex justify-center items-center">
                <div className="flex flex-col items-center gap-7 px-7">
                  <ul className="flex flex-col items-center gap-7">
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                  </ul>
                  <button className="px-4 py-2 rounded-xl border-2 border-white whitespace-nowrap">Contact Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
