import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"

import Nextsix from '@/components/experience/Nextsix'
import Ifcon from '@/components/experience/Ifcon'

export default function Experience() {
  return (
    <>
      <main className='w-full min-h-full relative'>
        <section className='text-center sm:text-start sm:min-h-screen sm:pt-[112px] flex flex-col justify-center items-center sm:pb-10 py-5'>
          <Swiper navigation={false} pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper w-full h-full !pb-16 cursor-pointer">
            <SwiperSlide className='!w-full !mr-0 !flex !flex-col !items-center'>
              <Nextsix />
            </SwiperSlide>

            <SwiperSlide className='!w-full !mr-0 !flex !flex-col !items-center'>
              <Ifcon />
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
    </>
  )
}
