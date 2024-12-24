import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent animate-pulse"></div>

            {/* Grid overlay for arcade feel */}
            <div className="absolute inset-0 bg-transparent opacity-20"></div>

            <div className="relative z-10 bg-transparent px-6 py-12">
                {/* Main footer content */}
                <div className="max-w-7xl mx-auto">


                    {/* Divider with glow effect */}
                    <div className="relative h-px w-full my-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
                    </div>

                    {/* Bottom section with copyright */}
                    <div className="text-center">
                        <div className="relative inline-block">
                            {/* Decorative corner elements */}
                            <div className="absolute -top-2 -left-2 w-2 h-2 border-t-2 border-l-2 border-pink-500"></div>
                            <div className="absolute -top-2 -right-2 w-2 h-2 border-t-2 border-r-2 border-pink-500"></div>
                            <div className="absolute -bottom-2 -left-2 w-2 h-2 border-b-2 border-l-2 border-pink-500"></div>
                            <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b-2 border-r-2 border-pink-500"></div>

                            <p className=" max-sm:text-xs sm:text-xxs md:text-xs lg:text-sm text-gray-400 px-8 py-2">
                                Made with ❤️ by <span className='text-violet-500 font-semibold'> Fiko </span>

                            </p>
                        </div>

                        {/* Arcade-style decoration */}
                        <div className="mt-4 flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
        </footer>
    );
};

export default Footer;