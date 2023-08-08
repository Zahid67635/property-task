import React, { useEffect, useState } from 'react';

const Home = () => {
    const [properType, setPropertyType] = useState([])
    const [id, setId] = useState('')
    useEffect(() => {
        fetch('propertyType.json')
            .then(res => res.json())
            .then(data => setPropertyType(data))
            .catch(er => console.log(er))
    }, [])
    const selectedButton = (id) => {
        setId(id)
    }
    return (
        <div className=''>
            <h1 className='text-[22px] font-medium'>Hotels</h1>
            <div className='flex gap-1'>
                {
                    properType.map((p, i) => <button onClick={() => selectedButton(i)} key={i} className={`w-[64px] h-[61px] p-1 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col justify-center items-center rounded-xl focus:outline-none ${id === i ? 'bg-slate-400 text-white' : ''}`}>
                        <img src={p.iconUrl} className='w-5 h-5' alt="" />
                        <h2 className='text-xs font-normal h-5'>{p.value}</h2>
                    </button>)
                }
            </div>
            <div>
                <h1 className='text-[18px]'>Top Hotels</h1>
            </div>
        </div>
    );
};

export default Home;