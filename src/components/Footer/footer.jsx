import React from 'react'
import './footer.css'
import { images } from '../../constants'
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className='footer__main_section main__section_padding'>
            <div className="footer__wrapper">
                <div className="footer_line"></div>
                <div className="footer__flex_wrapper">
                    <div className="footer__logo_section">
                        <Link to={{ pathname: '/' }} className="footer_logo_wrapper">
                            <img src={images.medex_m_logo} alt="medex_m_logo" className='footer_m_logo' />
                            <img src={images.medex_text_logo} alt="medex_m_logo" className='footer_text_logo' />
                        </Link>
                        <p className="footer_logo_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="footer__links_section">

                        <div className="link_section_first">
                            <a href="/discover" className="footer_blue_link">Discover</a>

                            <a href="/newSeason" className="footer_simple_link">New season</a>
                            <a href="/mostSearched" className="footer_simple_link">Most searched</a>
                            <a href="/mostSelled" className="footer_simple_link">Most selled</a>
                        </div>

                        <div className="link_section_first">
                            <a href="/discover" className="footer_blue_link">About</a>

                            <a href="/newSeason" className="footer_simple_link">Help</a>
                            <a href="/mostSearched" className="footer_simple_link">Shipping</a>
                            <a href="/mostSelled" className="footer_simple_link">Affiliate</a>
                        </div>

                        <div className="link_section_first">
                            <a href="/discover" className="footer_blue_link">Info</a>

                            <a href="/newSeason" className="footer_simple_link">Contect us</a>
                            <a href="/mostSearched" className="footer_simple_link">Privacy Policies</a>
                            <a href="/mostSelled" className="footer_simple_link">Terms &#38; Condition</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default footer