import React from 'react'
import SliderCard from './Client/SliderCard'

const Game = () => {
    return (
        <div className='max-sm:h-1/2screen sm:h-screen md:h-screen relative max-sm:my-10 sm:my-0'>
            <div className="w-full flex flex-col justify-center items-center relative">
                <div className="absolute bg-sky-600 blur-3xl rounded-full max-sm:w-40 max-sm:h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 top-32"></div>
                <h2 className="py-10  text-white text-center font-semibold iceland max-sm:text-xl  sm:text-3xl md:text-4xl">Currently Popular Games</h2>
                <SliderCard />
            </div>
        </div>
    )
}

export default Game