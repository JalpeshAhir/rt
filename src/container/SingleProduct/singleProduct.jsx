import React from 'react'
import { images } from '../../constants'
import './singleProduct.css'

import { AiOutlineShoppingCart } from "react-icons/ai";

import { FaBuilding } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

import { GiChemicalDrop } from "react-icons/gi";
import { Link } from 'react-router-dom';

const singleProduct = () => {

  window.scrollTo(0, 0)

  return (
    <div className='productpage__wrapper main__section_padding02'>



      <div className="productpage_photo_side_wrapper">
        <div className="productpage_img_wrapper">
          <img src={images.singleproduct_img} alt="" className="singleproduct_img" />
        </div>

        <div className="productpage_photo_side_wrapper-text_wrapper">
          <h4 className="singleproduct_item_dis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, quo!</h4>
          <div className="singleproduct_company_circle">
            <p className="singleproduct_delivery">🚚 FREE SHIPPING</p>
          </div>
        </div>
      </div>


      <div className="productpage_dis_side_wrapper">

        <h1 className="singleproduct_name base_heading_text">
          TAXIM 1GM INJECTION
        </h1>

        <div className="sellername_wrap">
          <p className="sellername_text">SLS pharma</p>
        </div>

        <div className="singleproduct_price_addtocart_wrapper">

          <div className="singleproduct_price_wrap">
            <div className="singleproduct_twoprice_wrap">
              <h2 className="singleproduct_price">&#x20B9; 99.99</h2>
              <p className="singleproduct_price_line">(&#x20B9;111.11)</p>
            </div>
            <div className="singleproduct_qty">
              <p className="quantity_text">Quantity</p>
              <div className="quantity_box">
                <p className="qty_no"><span className='qty_plus'>-</span>&nbsp;&nbsp;1&nbsp;&nbsp;<span className='qty_plus'>+</span></p>
              </div>
            </div>
          </div>

          <Link to={{ pathname: '/cart' }} className="singleproduct_addtocard_wrap">
            <AiOutlineShoppingCart className='singleproduct_addtocard_logo' />
            <p className="singleproduct_addtocard_text">+ Add to cart</p>
          </Link>

        </div>


        <div className="productpage_base_wrapper02">

          {/* LOGOS SECTION START */}

          <div className="singleproduct_logos_section">

            {/* LOGO 01 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaBuilding className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Manufacture</p>
                <p className="singlelogo_wrapper_dis">ALKEM LABORATORIES LIMITED</p>
              </div>
            </div>

            {/* LOGO 02 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaCalendarAlt className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Expiry Date</p>
                <p className="singlelogo_wrapper_dis">Nov 20, 2022</p>
              </div>
            </div>

            {/* LOGO 03 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaFile className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Type</p>
                <p className="singlelogo_wrapper_dis">Tablet</p>
              </div>
            </div>

            {/* LOGO 04 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaArrowDown className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Minimum Order Quantity</p>
                <p className="singlelogo_wrapper_dis">2</p>
              </div>
            </div>

            {/* LOGO 05 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaArrowUp className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Maximum Order Quantity</p>
                <p className="singlelogo_wrapper_dis">10</p>
              </div>
            </div>

            {/* LOGO 06 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaFolder className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Product Category</p>
                <p className="singlelogo_wrapper_dis">Others</p>
              </div>
            </div>

            {/* LOGO 07 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaRupeeSign className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Mrp</p>
                <p className="singlelogo_wrapper_dis">1500</p>
              </div>
            </div>

            {/* LOGO 08 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaShoppingBasket className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Gst</p>
                <p className="singlelogo_wrapper_dis">12%</p>
              </div>
            </div>

            {/* LOGO 09 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaGlobeAmericas className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Country of Origin </p>
                <p className="singlelogo_wrapper_dis">india</p>
              </div>
            </div>

            {/* LOGO 10 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <GiChemicalDrop className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Chemical Combination</p>
                <p className="singlelogo_wrapper_dis">Eltrombopag 50MG</p>
              </div>
            </div>

            {/* LOGO 11 */}

            <div className="singlelogo_wrapper">
              <div className="singlelogo_wrapper_logobox">
                <FaTag className='singlelogo_wrapper_logo' />
              </div>
              <div className="singlelogo_wrapper_text">
                <p className="singlelogo_wrapper_name">Discount on PTR</p>
                <p className="singlelogo_wrapper_dis">7.00%</p>
              </div>
            </div>

          </div>

          {/* LOGOS SECTION END */}

        </div>
      </div>


    </div>
  )
}

export default singleProduct