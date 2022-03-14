import React from 'react'
import './testimonialCard.css'
import { images } from '../../constants'

const testimonialCard = () => {
  return (
    <div>
        <div className="testimonials_single_card">
            <img src={images.testimonials_img01} alt="testimonials_img01" className='testimonials_card_img' />
            <img src={images.medex_stars01} alt="medex_stars01" className='testimonials_stars' />
            <p className="testimonials_card_heading">Lorem ipsum dolor down sit.</p>
            <p className="testimonials_card_dis">Lorem</p>
        </div>
    </div>
  )
}

export default testimonialCard