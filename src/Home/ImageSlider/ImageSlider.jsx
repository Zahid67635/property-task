/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ImageSlider = ({ children: images }) => {
    const [current, setCurrent] = useState(0)
    /**
     * The function "prev" updates the current state value to the previous index in an array of images,
     * or to the last index if the current index is 0.
     */
    const prev = () => {
        setCurrent((current) => (current == 0 ? images.length - 1 : current - 1))
    }
    /**
     * The function `next` updates the current state to the next image index, looping back to the first
     * image if the current index is the last one.
     */
    const next = () => {
        setCurrent((current) => (current == images.length - 1 ? 0 : current + 1))
    }
    return (
        <div className='overflow-hidden relative'>
            {/* The `transform:`translateX(-${current * 100}%)`` CSS property is used to move an element horizontally along the X-axis. In this case, it is being used to create a sliding effect for the images in the ImageSlider component. */}
            <div className='flex transition-transform ease-out duration-500' style={{
                transform: `translateX(-${current * 100}%)`
            }}>
                {images}
            </div>
            <div className='absolute inset-0 flex justify-between items-center px-1'>
                <li onClick={prev} className='p-1 w-8 h-8 rounded-full bg-slate-300 hover:bg-slate-200 text-center text-xl opacity-60'>&lt;</li>
                <li onClick={next} className='p-1 w-8 h-8 rounded-full bg-slate-300 hover:bg-slate-200 text-center text-xl opacity-60'>&gt;</li>
            </div>
        </div>
    );
};

export default ImageSlider;