import React from 'react'
import './bannerCard.css'
import { images } from '../../constants'

const bannerCard = () => {
  return (

    <div className="overly_singlecard-wrapper">
        <div className="overly_singlecard-img_wrapper">
            <img src={images.banner_card_img} alt="overly card img"/>    
        </div>
        <div className="overly_singlecard-product_info">
            <div className="product_info-heading">
                <h3>Lorem, ipsum.</h3>    
                <h6>Lorem ipsum dolor sit.</h6>
            </div>
            <div className="product_info-dis">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quae ducimus quam laborum. Eum adipisci itaque </p>    
            </div>
            <div className="product_info-buynow">
                <h3>&#8377;99</h3>   
                <button className='buynow_btn'>BUY NOW</button> 
            </div>
        </div>
    </div>

  )
}

export default bannerCard