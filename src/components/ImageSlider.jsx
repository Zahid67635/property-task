/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import './ImgSlider.css'
const ImageSlider = ({ pics }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel responsive={responsive} containerClass='custom-arrow'>
                {pics.map((p, i) => <img src={p} className='h-[175px] w-full' key={i} />)}
            </Carousel>
        </div>
    );
};

export default ImageSlider;