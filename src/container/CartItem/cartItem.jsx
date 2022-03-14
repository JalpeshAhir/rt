import React from 'react'
import { Link } from 'react-router-dom'
import { images } from "../../constants"
import "./cartItem.css"

const cartItem = () => {
    return (
        <section className='cart_item_main_wrapper'>
            <div className='cart_item_base_wrapper'>

                <div className="cart_item_section01">

                    <p className='cart_item_main_heading'>Your cart items</p>
                    <Link to={{ pathname: '/' }}>
                        <p className="back_to_shop">Back To Shopping</p>
                    </Link>

                </div>

                <div className="cart_item_section02">

                    <div className="first_text_section">
                        <div className="flex_left">
                            <p className="cart_item_simple_text">Product</p>
                        </div>

                        <div className="flex_right">
                            <p className="cart_item_simple_text">Price</p>
                            <p className="cart_item_simple_text">Quantity</p>
                            <p className="cart_item_simple_text">Total</p>
                        </div>
                    </div>

                    <div className="cart_item_line"></div>

                    <div className="card_item_photo_section">
                        <div className="flex_left cart_img_flex_wrapper">
                            <img src={images.singleproduct_img} alt="" className='card_item_img' />
                            <div className="card_item_img_text_wrapper">
                                <p>Spiced Mint Candleaf®</p>
                                <div>
                                    <a href="Remove" className='cartitem_remove_link'>Remove</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex_right prices_text">
                            <p className='cart_item_simple_text'>&#x20B9; 99.99</p>
                            <div className="singleproduct_qty">
                                <div className="quantity_box">
                                    <p className="qty_no"><span className='qty_plus'>-</span>&nbsp;&nbsp;1&nbsp;&nbsp;<span className='qty_plus'>+</span></p>
                                </div>
                            </div>
                            <p className='cart_item_simple_text'>&#x20B9; 99.99</p>
                        </div>
                    </div>

                    <div className="cart_item_line"></div>

                </div>

                <div className="cart_item_section03">
                    <div className="sub_total_wrap">
                        <div className="sub_total_wrap_text">
                            <p className="cart_item_simple_text">Sub-total</p>
                            <p className="cart_item_simple_text">&#x20B9; 99.99</p>
                        </div>
                        <div className="sub_total_wrap_dis">
                            <p>Tax and shipping cost will be calculated later</p>
                        </div>
                    </div>
                    {/* <button type='button'>Check-out</button> */}
                    <Link to={{ pathName: "#" }} className="check_out_btn">Check-out</Link>

                </div>

            </div>
        </section >
    )
}

export default cartItem