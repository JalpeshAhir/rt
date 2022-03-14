import React from 'react';
import './testimonials.css';
import { TestimonialCard } from '../../components';

const Data = [
  { id: 1 }, { id: 2 }, { id: 3 }
]

const testimonials = () => {
  return (
    <div className='testimonials__wrapper main__section_padding'>
      <h1 className="testimonials_h1 base__heading_text">Testimonials</h1>
      <h1 className="testimonials_dis">Lorem ipsum dolor sit amet consectetur.</h1>

      <div className="testimonials_cards_wrapper">
        {Data.slice(0, 3).map((item, index) => {
          return (
            <TestimonialCard />
          )
        })}
      </div>

      {/* ** CAROUSEL START ** */}
      <div id="carouselExampleIndicators" class="carousel slide carousel__start" data-ride="carousel">

        <div class="carousel-inner">
          {Data.map((item, index) => {
            return (
              <div class="carousel-item active">
                <TestimonialCard class="d-block w-100 bootstrap_img" />
              </div>
            )
          })}
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      {/* ** CAROUSEL END ** */}

    </div>
  )
}

export default testimonials