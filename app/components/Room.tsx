'use client'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'));

export default function Room () {
    const [ load, setLoad ] = useState(false);

    const handleLoad = () => {
        setLoad(true)
    }

    return (
        <>
            <div className='relative w-full h-full block sm:hidden bottom-[-20%]'>
                <img src="/myroom.png" alt="room" />
            </div>
            <Spline scene="https://prod.spline.design/r0Iem6wpaNhrBw92/scene.splinecode" 
                style={{position: 'relative', top: '0', zIndex: '10'}}
                onLoad={handleLoad}
                className='hidden md:block'
                //onProgressCapture={handleProgress}
                >

                    {
                        !load && 
                        <div className='relative w-full h-full top-0'>
                            <span className='absolute top-[65%] left-1/2 transform -translate-x-[50%] font-bold z-10 text-5xl'>방 만드는 중...</span>
                            <img src="/myroom.png" className='opacity-50 h-full aspect-3/4 max-w-none' alt="room" />
                        </div>
                    }
            </Spline>
        </>
    )
}