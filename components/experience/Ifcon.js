import Image from 'next/image'

import Tooltips from '../Tooltip'

export default function Nextsix() {
  return (
    <>
      <div className='flex sm:flex-row flex-col items-center sm:mb-3 mb-2 text-slate-700 sm:text-3xl text-xl font-semibold sm:gap-3'>
        <p>Frontend Web Developer</p>
        <span className='flex-shrink-0 h-2 w-2 bg-slate-500 rounded-full sm:flex hidden'></span>
        <p className='sm:text-slate-700 text-slate-500'>Ifcon Technology Sdn Bhd</p>
      </div>

      <p className='sm:text-lg text-sm sm:font-semibold font-medium text-slate-500 mb-3'>October 2021 - January 2023</p>

      <div className='max-w-3xl sm:text-base text-sm flex flex-col items-center text-center gap-4'>
        <p>I focus on creating user-centered designs by understanding business requirements and incorporating user feedback. I actively incorporate customer feedback, usage metrics, and usability findings to enhance the overall user experience. Additionally, I design and develop various web platform modules, including input controls, navigational components, and informational components.</p>
      </div>

      <div className='max-w-3xl grid sm:grid-cols-6 grid-cols-3 gap-4 w-full sm:justify-between justify-center items-center text-center mt-10'>
        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/html.svg' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='HTML' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/css.svg' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='CSS' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/javascript.svg' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='JAVASCRIPT' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/react.svg' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='REACTJS' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/nodejs.svg' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='NODEJS' />
        </div>

        <div className='sm:w-20 sm:h-20 w-14 h-14 mx-auto relative group'>
          <Image src='/portfolio/logo/mongodb.svg' fill className='relative z-10 bg-white grayscale group-hover:grayscale-0 transform transition' />
          <Tooltips title='MONGODB' />
        </div>
      </div>
    </>
  )
}
