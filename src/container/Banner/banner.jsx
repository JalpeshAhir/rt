import React from 'react';
import Carousel from 'react-elastic-carousel'
import { BannerCard } from '../../components'
import { MdPhone } from "react-icons/md";
import './banner.css'
import { useHomeContext } from '../../context/home_context';
import { Link } from 'react-router-dom';

const Banner = (props) => {

  const { categories } = useHomeContext()

  const breakPoints = [
    { width: 500, itemsToShow: 1, itemsToScroll: 1 },
    { width: 778, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 }
  ]


  return (
    <div className='banner__wrapper'>
      <div className="banner__background">
        <div className="nav_links_section">
          <div className="nav__links">
            {categories && categories.length > 0 ?
              categories.map((c, index) => {
                return (
                  // <Link className="nav_link">{c.name}</Link>
                  <ul className='top_submenu'>
                    <li>
                      <Link className="nav_link">{c.name}</Link>
                      <ul>
                        <li><Link className="nav_link" to={{ pathname: "/ManyProductPage" }}>jalpesh</Link></li>
                        <li><Link className="nav_link">vishal</Link></li>
                        <li><Link className="nav_link">madhav</Link></li>
                      </ul>
                    </li>
                  </ul>

                )
              })
              : null}
          </div>

          <div className="banner_contectus_section">
            <button className="contectus_btn">SELL ON MEDEX</button>
            <div className="contectus_line">|</div>
            <p className="contectus_nub">
              < MdPhone />
              +91 0988388743
            </p>
          </div>
        </div>
        <Carousel breakPoints={breakPoints} className='carousel banner_overly_wrapper' enableAutoPlay autoPlaySpeed={2000} itemPadding={[0, 5]} >
          <BannerCard />
          <BannerCard />
          <BannerCard />
          <BannerCard />
          <BannerCard />
          <BannerCard />
        </Carousel>

      </div>


      {/* <div className="banner_overly_wrapper"> */}

      {/* </div>  */}


    </div>
  )
}

export default Banner