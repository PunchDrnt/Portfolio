import React from 'react'
import './SkilSection.css'
import { useSwiperSlide } from 'swiper/react'

const SkillSection = () => {
  const swiperSlide = useSwiperSlide()

  console.log('skill', swiperSlide.isActive)

  return (
    <section id="Skill">
      <div className="skill-wrapper">
        <h1>Skill</h1>
      </div>
    </section>
  )
}

export default SkillSection
