import React from 'react'
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { images } from '../../constants'
import './learnMore.css'

const learnMore = () => {
    return (
        <div className='learnmore__wrapper main__section_padding'>
            <div className="learnmore_text_wrapper">
                <h1 className="base__heading_text learnmore_h1">Lorem ipsum dolor sit amet asent ver.</h1>
                <p className="learnmore_blue_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p className="learnmore_list_wrapper">
                    <div className="learnmore_single_list">
                        <MdOutlineCheckCircleOutline className='learnmore_check_mark' />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="learnmore_single_list">
                        <MdOutlineCheckCircleOutline className='learnmore_check_mark' />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="learnmore_single_list">
                        <MdOutlineCheckCircleOutline className='learnmore_check_mark' />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="learnmore_single_list">
                        <MdOutlineCheckCircleOutline className='learnmore_check_mark' />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </p>

                <button className='learnmore_butoon'>Learn More</button>
            </div>
            <img src={images.learnmore_img} className="learnmore_img_wrapper" alt="learnmore_img" />
        </div>
    )
}

export default learnMore