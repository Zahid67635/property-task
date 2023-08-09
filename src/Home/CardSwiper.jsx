/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Arrow.css'
import HotelCard from '../components/HotelCard';
import Loader from '../components/Loader';
const CardSwiper = ({ propertyName, loading, setLoading }) => {
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        if (propertyName) {
            fetch(`https://dev.ghuddy.link/api/v1/open/hotels?propertyType=${propertyName}`)
                .then(res => res.json())
                .then(data => {
                    setHotels(data.esHotelCardList)
                    setLoading(false)
                })
                .catch(er => console.log(er))
        }
        else {
            fetch(`https://dev.ghuddy.link/api/v1/open/hotels`)
                .then(res => res.json())
                .then(data => {
                    setHotels(data.esHotelCardList)
                    setLoading(false)
                })
                .catch(er => console.log(er))
        }

    }, [propertyName])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
        }
    };

    return (
        <div>
            <h1 className='text-[18px]'>Top Hotels</h1>
            {
                loading ? <Loader /> : <Carousel responsive={responsive} containerClass='custom-arrow-styles' className='py-11'>
                    {hotels.length == 0 ? <h1 className='text-xl text-blue-500 mt-5'>Sorry, not available..</h1> : hotels.map(h => <HotelCard details={h} key={h.id} className='flex justify-center' />)}

                </Carousel>
            }
        </div>
    );
};

export default CardSwiper;