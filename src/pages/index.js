import React from 'react'
import HeroSection from '../components/HeroSection'
import SkillSection from '../components/SkillSection'
import ContactSection from '../components/ContactSection'
import Layout from '../Layout'

//import swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper'

//import swiper css
import 'swiper/css'
import 'swiper/css/mousewheel'

const Home = () => {
  const Items = ['About', 'Skill', 'Contect']

  //custom modules
  const mousewheel = { sensitive: 1, forceToAxis: true }
  const pagination = {
    el: '.nav-menu',
    clickable: true,
    renderBullet: function (index, className) {
      return `<li class='${className}'>${Items[index]}</li>`
    },
  }
  return (
    <>
      <Swiper
        modules={[Mousewheel, Pagination]}
        direction={'vertical'}
        pagination={pagination}
        mousewheel={mousewheel}
      >
        <SwiperSlide>
          <HeroSection />
        </SwiperSlide>
        <SwiperSlide>
          <SkillSection />
        </SwiperSlide>
        <SwiperSlide>
          <ContactSection />
        </SwiperSlide>
        <Layout />
      </Swiper>
    </>
  )
}

export default Home
