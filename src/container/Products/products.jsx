import React, { useEffect } from 'react'
import './products.css'
import { useProductsContext } from '../../context/products_context'
import { products_url } from '../../Utils/constatns'
import { ProductCard } from '../../components'

const Data = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }
]

const Products = (props) => {
  const { products } = useProductsContext()

  window.scrollTo(0, 0)

  return (
    <div className='product__wrapper main__section_padding'>
      <h1 className="base__heading_text product_h1">Products</h1>

      {/* Product START */}
      <div className="cards__wrapper">
        {products && products.length > 0 ?
          products.slice(0, 8).map((item, index) => {
            return (
              <ProductCard product={item} />
            )
          }) : null}
      </div>

      {/* CARDS END */}

      {/* CAROUSEL START */}
      <div id="carouselExampleIndicators" class="carousel slide carousel__start" data-ride="carousel">

        <div class="carousel-inner">
          {products && products.length ?
            products.map((item, index) => {
              return (
                <div class="carousel-item active">
                  <ProductCard class="d-block w-100 bootstrap_img" product={item} />
                </div>
              )
            }) : null}

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

export default Products