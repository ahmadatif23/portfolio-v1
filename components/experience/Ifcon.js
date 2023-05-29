import Image from 'next/image'

import Tooltips from '../Tooltip'

export default function Nextsix() {
  return (
    <>
      <div className='flex sm:flex-row flex-col items-center sm:mb-3 mb-2 text-slate-700 sm:text-3xl text-xl font-semibold sm:gap-3'>
        <p className='hover:text-sky-700'>Frontend Web Developer</p>
        <span className='flex-shrink-0 h-2 w-2 bg-slate-500 rounded-full sm:flex hidden'></span>
        <p className='sm:text-slate-700 text-slate-500 hover:text-sky-700'>Ifcon Technology Sdn Bhd</p>
      </div>

      <p className='sm:text-lg text-sm sm:font-semibold font-medium text-slate-500 mb-3'>October 2021 - January 2023</p>

      <div className='max-w-3xl sm:text-base text-sm flex flex-col items-center text-center gap-4'>
        <p>I specialized in crafting user-centered designs by thoroughly understanding business requirements and incorporating valuable user feedback. I actively integrated customer feedback, usage metrics, and usability findings to continuously enhance the user experience. Additionally, I took charge of designing and developing web platform modules such as input controls, navigational components, and informational elements</p>
      </div>

      <div className='max-w-3xl grid sm:grid-cols-6 grid-cols-3 gap-4 w-full sm:justify-between justify-center items-center text-center mt-10'>
        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/html.svg' alt='technology logo' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='HTML' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/css.svg' alt='technology logo' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='CSS' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/javascript.svg' alt='technology logo' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='JAVASCRIPT' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/laravel.svg' alt='technology logo' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='LARAVEL' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/tailwindcss.svg' alt='technology logo' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='TAILWINDCSS' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/bootstrap.svg' alt='technology logo' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='BOOTSTRAP' />
        </div>
      </div>

      {/* add click to see project */}
    </>
  )
}
