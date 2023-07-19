import Head from 'next/head'
import Image from 'next/image'

import Tooltips from '../components/Tooltip'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>Ahmad Atif | Web Developer & Designer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/portfolio/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="57x57" href="/portfolio/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/portfolio/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/portfolio/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/portfolio/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/portfolio/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/portfolio/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/portfolio/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/portfolio/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portfolio/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/portfolio/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portfolio/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/portfolio/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/portfolio/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/portfolio/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#0369a1" />
        <meta name="msapplication-TileImage" content="/portfolio/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#0369a1" />
      </Head>

      <main className='w-full min-h-full'>
        <section className='text-center sm:text-start sm:min-h-screen flex flex-col justify-center items-center sm:py-10 py-5'>
          <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 w-full sm:justify-between justify-center items-center text-center sm:mt-10'>
            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://bilutvalley.com/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/bilut.jpeg' alt='bilut screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://www.airescan.com/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/airescan.jpeg' alt='airescan screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://www.a2shipping.co.uk/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/a2shipping.jpeg' alt='a2shipping screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://blast.my/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/blast.jpeg' alt='blast screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://ketik.my/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/ketik.jpeg' alt='ketik screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://www.nutellamurah.com/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/nutella.jpeg' alt='nutella screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://scrutpay.com/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/scrutpay.jpeg' alt='scrutpay screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

            <div className='sm:w-full w-[85%] h-40 sm:h-52 mx-auto relative group'>
              <Link href='https://tradinghook.com/' target="_blank" rel="noopener noreferrer">
                <Image src='/portfolio/project/tradinghook.jpeg' alt='tradinghook screenshot' fill className='object-contain grayscale group-hover:grayscale-0 rounded shadow' />
              </Link>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
