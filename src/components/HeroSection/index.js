import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './HeroSection.css'
import { useSwiperSlide } from 'swiper/react'

const HeroSection = () => {
  const swiperSlide = useSwiperSlide()

  console.log('Hero', swiperSlide.isActive)
  return (
    <>
      <section id="Home">
        <div className="hero-wrapper">
          <div className="hero-left">
            <h2>Hello</h2>
            <h1>
              I'm Jedsada Darunaithorn
              <br />
              Front-End Developer
            </h1>
            <p>
              Graduate with a major in information technology and experience in
              HTML, CSS, and JavaScript. I am a motivated and enthusiastic
              learner who wishes to expand my practical knowledge.
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-image"></div>
          </div>
        </div>
        <div className="arrow-down">
          <MdKeyboardArrowDown />
        </div>
      </section>
    </>
  )
}

export default HeroSection
