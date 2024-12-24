import React, { useState } from "react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close menu after clicking
        }
    };

    return (
        <nav className={`absolute w-full flex items-center justify-between max-sm:px-5 sm:px-10 md:px-10 lg:px-20 max-md:py-4 md:py-2 lg:py-3 xl:py-5 z-50 transition-all duration-300 bg-tra backdrop-blur-sm`}>
            {/* Logo */}
            <div className="flex items-center gap-2 text-white max-sm:text-xl sm:text-sm md:text-base lg:text-xl">
                <button onClick={() => scrollToSection('home')}>
                    <img src="/logo3.png" alt="logo" className="max-sm:w-14 sm:w-12" />
                </button>
                <h3 className="iceland">
                    FAY
                    <span className="bg-gradient-to-r from-purple-700 max-md:ml-0.5 md:ml-1 to-sky-400 max-sm:p-0.5 sm:p-1 rounded iceland">
                        RENT
                    </span>
                </h3>
            </div>

            {/* Menu Links - Hidden di Mobile */}
            <ul className="hidden md:flex items-center gap-5 md:text-xs lg:text-base">
                <li>
                    <button
                        className="text-white hover:text-purple-500"
                        onClick={() => scrollToSection('games')}
                    >
                        Games
                    </button>
                </li>
                <li>
                    <button
                        className="text-white hover:text-purple-500"
                        onClick={() => scrollToSection('info')}
                    >
                        Contact
                    </button>
                </li>
                <li>
                    <button
                        className="text-white hover:text-purple-500"
                        onClick={() => scrollToSection('rent')}
                    >
                        Rent
                    </button>
                </li>
            </ul>

            {/* Login Button - Hidden di Mobile */}
            <div className="hidden md:flex md:text-sm lg:text-base">
                <a
                    href="/login"
                    className="bg-gradient-to-r from-purple-700 to-sky-400 font-semibold text-white rounded-lg text-center border-none cursor-pointer transition-all duration-150
                    md:py-2 lg:py-2 md:px-5 lg:px-6
                    hover:bg-purple-700"
                >
                    Login
                </a>
            </div>

            {/* Hamburger Menu */}
            <button
                className="block md:hidden text-white focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            {/* Dropdown Menu */}
            <div
                className={`${isMenuOpen ? "block" : "hidden"
                    } absolute top-16 max-sm:right-5 sm:right-10 max-sm:w-44 sm:w-48 bg-zinc-800 rounded-lg shadow-lg md:hidden`}
            >
                <ul className="flex flex-col gap-4 p-4 max-sm:text-sm sm:text-xs">
                    <li>
                        <button
                            className="text-white hover:text-purple-500 block w-full text-left"
                            onClick={() => scrollToSection('games')}
                        >
                            Games
                        </button>
                    </li>
                    <li>
                        <button
                            className="text-white hover:text-purple-500 block w-full text-left"
                            onClick={() => scrollToSection('info')}
                        >
                            Contact
                        </button>
                    </li>
                    <li>
                        <button
                            className="text-white hover:text-purple-500 block w-full text-left"
                            onClick={() => scrollToSection('rent')}
                        >
                            Rent
                        </button>
                    </li>
                    <li>
                        <a
                            href="/login"
                            className="bg-gradient-to-r from-purple-700 to-sky-400 max-sm:py-1 sm:py-2 font-semibold text-white rounded-lg text-center block"
                        >
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;