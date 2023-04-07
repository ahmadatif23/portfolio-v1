import Head from 'next/head'

export default function About() {
  return (
    <>
        <Head>
            <title>Ahmad Atif | Web Developer & Designer</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='w-full min-h-full'>
            <section className='text-center sm:text-start sm:min-h-screen flex flex-col justify-center items-center sm:py-10 py-5'>
                <p className='md:text-4xl text-3xl font-bold mb-6'>Hi, I’m Ahmad. Nice to meet you.</p>
                <div className='max-w-3xl flex flex-col items-center text-center gap-4'>
                    <p>Hello! My name is Ahmad and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                    <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                    <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                </div>

                {/* <div className='grid sm:grid-cols-6 grid-cols-2 w-full justify-between'>
                    <div className='w-32 h-32 bg-red-50'></div>
                    <div className='w-32 h-32 bg-red-50'></div>
                    <div className='w-32 h-32 bg-red-50'></div>
                    <div className='w-32 h-32 bg-red-50'></div>
                    <div className='w-32 h-32 bg-red-50'></div>
                    <div className='w-32 h-32 bg-red-50'></div>
                </div> */}
            </section>
      </main>
    </>
  )
}