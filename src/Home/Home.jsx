import React, { useEffect, useState } from 'react';
import CardSwiper from './CardSwiper';

const Home = () => {
    const [propertyType, setPropertyType] = useState([])
    const [propertyName, setPropertyName] = useState('')
    const [id, setId] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('propertyType.json')
            .then(res => res.json())
            .then(data => setPropertyType(data))
            .catch(er => console.log(er))
    }, [])
    /**
     * The function `selectedButton` is used to handle the selection of a button, updating the state
     * variables `loading`, `id`, `isActive`, and `propertyName` accordingly.
     */
    const selectedButton = (i, p) => {
        setLoading(true)
        if (i !== id && id !== '') {
            setPropertyName(p.value)
            setIsActive(true)
            setId(i)
        }
        else {
            setId(i)
            setIsActive(!isActive)
            if (!isActive) {
                setPropertyName(p.value)
            }
            else {
                setPropertyName('')
            }
        }

    }
    return (
        <div className='w-full'>
            <h1 className='text-[22px] font-medium'>Hotels</h1>
            <div className='flex gap-1 md:overflow-hidden overflow-x-auto p-2'>
                {
                    propertyType.map((p, i) => <button onClick={() => selectedButton(i, p)} key={i} className={`w-[64px] h-[61px] p-1 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col justify-center items-center rounded-xl focus:outline-none ${id === i && isActive ? 'bg-[#07bc0dc7] text-white' : ''}`}>
                        <img src={p.iconUrl} className='w-5 h-5' alt="" />
                        <h2 className='text-xs font-normal h-5'>{p.value}</h2>
                    </button>)
                }
            </div>
            <CardSwiper propertyName={propertyName} loading={loading} setLoading={setLoading} />
        </div>
    );
};

export default Home;