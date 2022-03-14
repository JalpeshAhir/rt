import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import './productCard.css'

const productCard = (props,) => {
  const product = props.product

  return (
    <div>
      {product && product !== undefined ?
        <Link className="single_card_wrapper" to={{ pathname: '/SingleProductPage' }} >
          <img src={product.image} alt="" className="in_card_img" />
          <div className="card_dis_wrapper">
            <div className="in_card_dis">{product.name}</div>
            <div className="in_card_price">&#8377;{product.price}</div>
          </div>
        </Link>
        : null}
    </div>
  )
}

export default productCard