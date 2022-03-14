import React from 'react'
import { ProductCard } from '../../components'
import { useProductsContext } from '../../context/products_context'
// import { images } from '../../constants'
import './popular.css'

const Data = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
]

const Popular = () => {
  const { products } = useProductsContext()

  return (
    <div className='popular__wrapper main__section_padding'>
      <h1 className="popular_h1 base__heading_text">
        Popular
      </h1>
      <p className="popular_dis">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="popular_card_wrapper">
        {products && products.length ?
          products.slice(0, 4).map((item, index) => {
            return (
              <ProductCard product={item} />
            )
          }) : null}
      </div>

      {/* CARDS END */}


      {/* CAROUSEL START */}
      <div id="carouselExampleIndicators" class="carousel slide carousel__start" data-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <ProductCard class="d-block w-100 bootstrap_img" />
          </div>
          <div class="carousel-item">
            <ProductCard class="d-block w-100 bootstrap_img" />
          </div>
          <div class="carousel-item">
            <ProductCard class="d-block w-100 bootstrap_img" />
          </div>
          <div class="carousel-item">
            <ProductCard class="d-block w-100 bootstrap_img" />
          </div>
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

      {/* CAROUSEL END */}


    </div>
  )
}

export default Popular