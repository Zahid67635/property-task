/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ImageSlider = ({ children: images }) => {
    const [current, setCurrent] = useState(0)
    const prev = () => {
        setCurrent((current) => (current == 0 ? images.length - 1 : current - 1))
    }
    const next = () => {
        setCurrent((current) => (current == images.length - 1 ? 0 : current + 1))
    }
    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
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