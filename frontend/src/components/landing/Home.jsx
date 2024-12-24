import React from 'react';
import '../../App.css';
import Primary from '../../../public/ps.png';

const Home = () => {
    const particles = Array.from({ length: 20 }); // Membuat 10 partikel
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close menu after clicking
        }
    };

    return (
        <div className='h-screen relative '>
            {/* Background Gradient */}
            <div className="absolute bg-sky-600 blur-3xl rounded-full w-80 h-80 max-md:top-20 md:top-14 lg:top-20 xl:top-36 -left-64"></div>
            <div className="absolute bg-sky-600 blur-3xl rounded-full w-80 h-80 max-md:bottom-0 md:-bottom-10 lg:bottom-4 xl:bottom-14 -right-52"></div>

            {/* Content */}
            <div className='w-full h-full flex justify-center max-md:items-start md:items-center relative  '>
                <div className='md:left-28 lg:left-32 xl:left-28 absolute flex max-sm:items-center sm:items-center md:items-start flex-col gap-2 z-10 max-sm:mt-96 sm:mt-44  md:mt-0 max-sm:text-center sm:text-center md:text-start '>
                    <div>
                        <p className='text-purple-500 font-semibold max-lg:text-xs lg:text-base'>
                            Game On, Fun On!
                        </p>
                        <p className='text-white max-sm:text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold iceland'>
                            Tempat Kumpul Gaming Nyaman
                        </p>
                        <p className='text-white max-sm:text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold iceland'>
                            dan Seru Bareng Teman!
                        </p>
                    </div>
                    <button
                        onClick={() => scrollToSection('games')}
                        className='sm:w-3/5 md:w-2/5 bg-gradient-to-r from-purple-700 to-sky-400 max-md:py-2 md:py-3 max-sm:px-6 font-semibold text-white rounded-lg text-center border-none cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105
                        sm:text-xs lg:text-base
                        '
                    >
                        Start Exploring -{`>`}
                    </button>
                </div>
                <div className='max-sm:w-2/5 sm:w-1/5 h-2/5 md:absolute right-40 flex justify-center items-center max-sm:mt-40 sm:mt-10 md:mt-0 '>
                    <img
                        src={Primary}
                        alt="primary"
                        className='animate-float'
                    />


                    <div className="">
                        {particles.map((_, index) => (
                            <div
                                key={index}
                                className="particle"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 10 + 5}px`,
                                    height: `${Math.random() * 10 + 5}px`,
                                    animationDelay: `${Math.random() * 3}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
