import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmad Atif | Web Developer & Designer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full flex flex-col justify-center'>
        <section className='text-center sm:text-start'>
          <p className='text-lg mb-4'>Hi, my name is</p>
          <h1 className='md:text-5xl text-4xl  font-bold leading-none mb-2'>Ahmad Atif</h1>
          <h1 className='md:text-5xl text-4xl  font-bold text-slate-600 leading-none mb-6'>I love creating things for web.</h1>
          <p className='max-w-2xl mb-6 sm:block hidden'>As a software engineer, I specialize in creating exceptional digital experiences and occasionally doing design work. While working with The Company on property websites, I prioritize accessibility and user-centered design.</p>
          <p className='max-w-2xl mb-2 sm:hidden font-light'>As a software engineer, I specialize in creating exceptional digital experiences and occasionally doing design work.</p>
          <p className='max-w-2xl mb-6 sm:hidden font-light'>While working with The Company on property websites, I prioritize accessibility and user-centered design.</p>
          <div>
            <button className="px-6 py-3 rounded-xl border-2 whitespace-nowrap">Contact Me</button>
          </div>
        </section>

        <section></section>
      </main>
    </>
  )
}
