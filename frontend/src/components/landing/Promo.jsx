import React, { useState, useEffect } from 'react';

const Promo = () => {
    // State untuk mengatur kedipan
    const [flicker1, setFlicker1] = useState(true);
    const [flicker2, setFlicker2] = useState(true);

    // Efek kedipan untuk text pertama
    useEffect(() => {
        const interval1 = setInterval(() => {
            // Random flicker effect
            setFlicker1(prev => Math.random() > 0.2);
        }, 100);

        return () => clearInterval(interval1);
    }, []);

    // Efek kedipan untuk text kedua
    useEffect(() => {
        const interval2 = setInterval(() => {
            // Random flicker effect dengan timing berbeda
            setFlicker2(prev => Math.random() > 0.1);
        }, 150);

        return () => clearInterval(interval2);
    }, []);

    return (
        <div className='w-full max-sm:h-3/4screen sm:h-screen flex justify-center items-center relative overflow-hidden bg-transparent'>
            {/* Background dengan efek gradien */}
            <div className='absolute w-full h-1/2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 transform -skew-y-6 scale-110 animate-pulse mt-20'></div>
            <div className='absolute w-full h-1/2 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 opacity-50 transform -skew-y-3 scale-110 mt-20'></div>

            {/* Container untuk text neon */}
            <div className='absolute top-10 md:left-16 z-40'>
                {/* Text "Special" dengan efek neon */}
                <p className={`max-sm:text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold ${flicker1 ? 'opacity-100' : 'opacity-70'} 
                    transition-all duration-100 
                    text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400
                    drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]
                    animate-pulse`}>
                    Special
                </p>

                {/* Text "Promo" dengan efek neon berbeda */}
                <p className={`max-sm:text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold ml-10  ${flicker2 ? 'opacity-100' : 'opacity-80'} 
                    transition-all duration-150
                    text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600
                    drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]
                    animate-pulse`}>
                    Promo
                </p>
            </div>

            {/* Efek blur/glow di background */}
            <div className='absolute top-0 left-0 w-full h-full bg-transparent opacity-20 z-10'></div>

            {/* Content container */}
            <div className='relative z-30 flex justify-center max-sm:gap-4 sm:gap-8 w-full max-sm:max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-20'>
                {/* Card Main di Tempat */}
                <div className='w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl max-sm:px-4 max-sm:py-2 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-4 border border-white/20 hover:scale-105 transition-transform duration-300'>
                    <div className='text-white mb-6'>
                        <h2 className='max-sm:text-xs sm:text-xxs md:text-base lg:text-lg xl:text-xl font-bold text-center mb-2 text-yellow-400'>Main Di Tempat</h2>
                        <div className='h-0.5 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-4'></div>

                        <div className='max-sm:space-y-2 sm:space-y-2 md:space-y-4'>
                            <div className='bg-white/5 px-4 py-2 rounded-lg'>
                                <h3 className='max-sm:text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg font-semibold max-sm:mb-1 sm:mb-1 md:mb-1 xl:mb-2 text-yellow-300'>PlayStation 2</h3>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-300'>Rp 2.000/jam</p>
                            </div>

                            <div className='bg-white/5 px-4 py-2 rounded-lg'>
                                <h3 className='max-sm:text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg font-semibold max-sm:mb-1 sm:mb-1 md:mb-1 xl:mb-2 text-yellow-300'>PlayStation 3</h3>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-300'>Rp 4.000/jam</p>
                            </div>

                            <div className='bg-white/5 px-4 py-2 rounded-lg'>
                                <h3 className='max-sm:text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg font-semibold max-sm:mb-1 sm:mb-1 md:mb-1 xl:mb-2 text-yellow-300'>PlayStation 4</h3>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-300'>Rp 6.000/jam</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Bawa Pulang */}
                <div className='w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl max-sm:px-4 max-sm:py-2 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-4 border border-white/20 hover:scale-105 transition-transform duration-300'>
                    <div className='text-white mb-6'>
                        <h2 className='max-sm:text-xs sm:text-xxs md:text-base lg:text-lg xl:text-xl font-bold text-center mb-2 text-pink-400'>Bawa Ke Rumah</h2>
                        <div className='h-0.5 w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-4'></div>

                        <div className='max-sm:space-y-2 sm:space-y-2 md:space-y-4'>
                            <div className='bg-white/5 px-4 py-2 rounded-lg'>
                                <h3 className='max-sm:text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg font-semibold max-sm:mb-1 sm:mb-1 md:mb-1 xl:mb-2 text-pink-300'>PlayStation 2</h3>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-300'>Rp 24k/12jam & Rp 45k/hari</p>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-400'>+ Rp 9.999  (dengan TV)</p>
                            </div>

                            <div className='bg-white/5 px-4 py-2 rounded-lg'>
                                <h3 className='max-sm:text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg font-semibold max-sm:mb-1 sm:mb-1 md:mb-1 xl:mb-2 text-pink-300'>PlayStation 3</h3>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-300'>Rp 45k/12jam & Rp 90k/hari</p>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-400'>+ Rp 9.999  (dengan TV)</p>
                            </div>

                            <div className='bg-white/5 px-4 py-2 rounded-lg'>
                                <h3 className='max-sm:text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg font-semibold max-sm:mb-1 sm:mb-1 md:mb-1 xl:mb-2 text-pink-300'>PlayStation 4</h3>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-300'>Rp 70k/12jam & Rp 140k/hari</p>
                                <p className='max-sm:text-xxxs sm:text-xxxs md:text-xxs lg:text-xs xl:text-sm text-gray-400'>+ Rp 9.999  (dengan TV)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tambahan efek bintik-bintik cahaya */}
            <div className='absolute w-full h-full'>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className='absolute w-1 h-1 bg-white rounded-full animate-pulse'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Promo;