import React from 'react'
import './ContactSection.css'
import { useSwiperSlide } from 'swiper/react'

const ContactSection = () => {
  const swiperSlide = useSwiperSlide()

  console.log('Contect', swiperSlide.isActive)
  return (
    <section id="Contact">
      <div className="contact-wrapper">
        <h1>contact</h1>
      </div>
    </section>
  )
}

export default ContactSection
