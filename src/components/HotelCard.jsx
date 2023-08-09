/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar, FaMapMarkerAlt, FaHome, FaRegHeart, FaBullhorn } from "react-icons/fa";
import ImageSlider from '../Home/ImageSlider/ImageSlider';

const HotelCard = ({ details }) => {
    const { images, property_name, class_rating, short_address, property_tag, black_price, red_price } = details
    return (
        <div className="overflow-hidden rounded-lg bg-white text-slate-500 shadow-lg shadow-slate-300 w-[252px] h-[391px] hover:shadow-slate-500 transition ease-in-out delay-100 duration-300 hover:cursor-pointer relative">
            {/*  <!-- Image --> */}
            <figure>

                <ImageSlider>
                    {images.map(i => <img src={i} key={i} className='h-[185px] w-[252px]' alt="" />)}
                </ImageSlider>
                {/* <img src={images[0]} className='h-[185px] w-full' alt="" /> */}
            </figure>
            {/*  <!-- Body--> */}
            <div className='flex absolute top-2 justify-between w-full items-center'>
                <div className='bg-red-500 flex items-center w-32 h-5 text-xs justify-between text-white p-1'><span className='flex gap-1'><FaBullhorn />-24% off</span>  <span className='bg-white text-red-400 rounded'>Deal!</span></div>
                <div><FaRegHeart className='text-white text-xl mr-2' /></div>
            </div>
            <div className="p-3">
                <header className="flex justify-between">
                    <h3 className="text-sm font-medium text-slate-700 w-4/5">
                        {property_name}
                    </h3>
                    <h3 className="text-xs text-slate-400 flex mt-[2px]"><span><FaStar className='text-yellow-400 text-sm mr-1' /></span> {class_rating}</h3>
                </header>
                <div className='py-1'>
                    <h4 className='text-xs font-normal mb-1 flex'><FaMapMarkerAlt className='text-sm mr-1' />{short_address}</h4>
                    <h4 className='text-xs font-normal flex'><FaHome className='text-sm mr-1' />{property_tag.slice(0, 30)}</h4>
                    <h4 className='text-center mt-2 text-black text-sm'>Checkout Price:</h4>
                    <h4 className='text-sm font-medium text-center'>{Math.ceil(red_price)} BDT <s className='opacity-50 text-[12px]'>{black_price} BDT</s></h4>
                </div>
            </div>
        </div >
    );
};

export default HotelCard;