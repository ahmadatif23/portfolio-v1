import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(props) {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  const handlePage = (e, path, type) => {
    e.preventDefault()
    type === 'link' && setSidebar(false)
    props.onHandlePage && props.onHandlePage(path)
  }

  return (
    <>
      <div className='w-full flex py-7 px-6 xl:px-0 items-center justify-center sm:absolute top-0 z-10'>
        <div className='max-w-7xl w-full flex justify-between'>
          <Link href='/' onClick={ (e) => handlePage(e, '/') }>
            <div className='w-14 h-14 border-2 rounded-full flex items-center justify-center'></div>
          </Link>

          <div className='sm:flex hidden items-center gap-7'>
            <ul className='flex items-center gap-7'>
              <li>
                <Link href='/about' onClick={ (e) => handlePage(e, '/about') }>
                  About
                </Link>
              </li>

              <li>
                <Link href='/about' onClick={ (e) => handlePage(e, '/experience') }>
                  Experience
                </Link>
              </li>
              <li>Work</li>
            </ul>

            <button className='px-4 py-2 rounded-xl border-2 whitespace-nowrap'>Contact Me</button>
          </div>

          <div className='absolute right-0 top-0 z-10 flex sm:hidden items-center'>
            <div className='px-6 py-7'>
              <div className='h-14 flex items-center justify-end'>
                <button onClick={ handleSidebar } className={ 'w-8 h-8 flex items-center justify-center transition-all duration-500 ' + (sidebar ? 'rotate-90' : 'rotate-0') }>
                  {
                    sidebar ?
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'> <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' /> </svg> :
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'> <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' /> </svg>
                  }
                </button>
              </div>
            </div>
          </div>

          <div className={ 'absolute top-0 w-full h-screen bg-slate-200 bg-opacity-70 transition-all duration-400 ease-in-out overflow-hidden transform backdrop-blur-md ' + (sidebar ? 'left-0' : '-left-full') }>
            <div className='w-full h-full flex flex-col justify-center'>
              <div className='flex items-center justify-center mt-10'>
                <Link href='/' onClick={ (e) => handlePage(e, '/', 'link') } className='w-14 h-14 border-2 border-white rounded-full flex items-center justify-center'>

                </Link>
              </div>

              <div className='flex-1 w-full flex justify-center items-center'>
                <div className='flex flex-col items-center gap-7 px-7'>
                  <ul className='flex flex-col items-center gap-7'>
                    <li>
                      <Link href='/about' onClick={ (e) => handlePage(e, '/about', 'link') }>
                        About
                      </Link>
                    </li>

                    <li>
                      <Link href='/experience' onClick={ (e) => handlePage(e, '/experience', 'link') }>
                        Experience
                      </Link>
                    </li>
                    
                    <li>Work</li>
                  </ul>
                  <button className='px-4 py-2 rounded-xl border-2 border-white whitespace-nowrap'>Contact Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
