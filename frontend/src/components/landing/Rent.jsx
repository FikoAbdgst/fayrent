import React, { useEffect, useState } from 'react';
import Ps4 from '../../../public/ps4-removebg-preview.png'
import Ps3 from '../../../public/ps3-removebg-preview.png'
import Ps2 from '../../../public/ps2-removebg-preview.png'
import Cookies from 'js-cookie';


const Rent = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [hoveredMachine, setHoveredMachine] = useState(null);
    const [consoles, setConsoles] = useState([]);

    // Fungsi untuk mendapatkan gambar konsol
    const getConsoleImage = (name) => {
        switch (name) {
            case 'PlayStation 4':
                return Ps4;
            case 'PlayStation 3':
                return Ps3;
            case 'PlayStation 2':
                return Ps2;
            default:
                return '';
        }
    };

    const getDefaultGames = (name) => {
        switch (name) {
            case 'PlayStation 4':
                return [
                    { title: 'God of War' },
                    { title: 'FIFA 23' },
                    { title: 'GTA V' }
                ];
            case 'PlayStation 3':
                return [
                    { title: 'The Last of Us' },
                    { title: 'Uncharted 3' },
                    { title: 'Gran Turismo 6' }
                ];
            case 'PlayStation 2':
                return [
                    { title: 'Final Fantasy X' },
                    { title: 'PES 6' },
                    { title: 'God of War II' }
                ];
            default:
                return [];
        }
    };

    // Fetch consoles data from API
    useEffect(() => {
        const fetchConsoles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/consoles');
                const data = await response.json();

                // Transform the data to match the component's needs
                const transformedData = data.map(console => ({
                    name: console.name,
                    status: console.tersedia ? 'Tersedia' : 'Tidak Tersedia',
                    image: getConsoleImage(console.name),
                    games: getDefaultGames(console.name)
                }));

                setConsoles(transformedData);
            } catch (error) {
                console.error('Error fetching consoles:', error);
            }
        };

        fetchConsoles();

        // Set up polling to check for updates every 30 seconds
        const interval = setInterval(fetchConsoles, 30000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='relative w-full min-h-screen bg-transparent p-8 overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
                <div className='absolute top-40 right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700'></div>
                <div className='absolute bottom-20 left-1/4 w-36 h-36 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000'></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20'></div>

            {/* Arcade Header with enhanced decorations */}
            <div className='text-center my-10 relative z-10'>
                <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl'></div>
                <h1 className='max-sm:text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                    from-purple-400 via-pink-500 to-red-500 
                    animate-pulse drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]'>
                    RENT STATION
                </h1>
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 w-96 h-1 
                    bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse'></div>
                <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-1 
                    bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse'></div>

                {/* Added decorative elements */}
                <div className='absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-pink-500/50 blur-sm animate-pulse'></div>
                <div className='absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-pink-500/50 blur-sm animate-pulse'></div>
            </div>

            {/* Machines Container with enhanced layout */}
            <div className='relative z-10 flex flex-wrap justify-center max-md:gap-4 md:gap-8'>
                {consoles.map((console, index) => (
                    <div key={index}
                        className={`relative max-sm:w-40 sm:w-40 md:w-52 lg:w-60 xl:w-80 
                            transform transition-all duration-500 hover:scale-105
                            ${hoveredMachine === index ? 'z-20' : 'z-10'}`}
                        onMouseEnter={() => setHoveredMachine(index)}
                        onMouseLeave={() => setHoveredMachine(null)}>

                        {/* Hover Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r 
                            ${console.status === 'Tersedia'
                                ? 'from-green-500/20 to-blue-500/20'
                                : 'from-red-500/20 to-purple-500/20'} 
                            filter blur-xl transition-opacity duration-300 
                            ${hoveredMachine === index ? 'opacity-100' : 'opacity-0'}`}>
                        </div>
                        {/* Arcade Machine Frame with enhanced styling */}
                        <div className={`relative rounded-t-xl p-6 transform perspective-1000 
                            transition-all duration-300 ease-out
                            bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800
                            border-t-4 border-x-4 ${console.status === 'Tersedia'
                                ? 'border-green-500/50 hover:border-green-400'
                                : 'border-red-500/50 hover:border-red-400'}
                            shadow-lg hover:shadow-2xl`}>

                            {/* Screen Frame with enhanced effects */}
                            <div className='relative rounded-lg p-4 bg-black/80 
                                border-2 border-gray-700 overflow-hidden
                                shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]'>
                                {/* Screen Content */}
                                <img
                                    src={console.image}
                                    alt={console.name}
                                    className={`w-full max-sm:h-12 sm:h-16 md:h-28 lg:h-36 xl:h-48 object-contain 
                                        transition-all duration-300
                                        ${console.status === 'Tersedia'
                                            ? 'drop-shadow-[0_0_8px_rgba(0,255,0,0.5)] hover:drop-shadow-[0_0_12px_rgba(0,255,0,0.7)]'
                                            : 'opacity-50 grayscale'}`}
                                />

                                {/* Enhanced Screen Glare */}
                                <div className='absolute top-0 left-0 w-full h-full 
                                    bg-gradient-to-br from-white/10 via-white/5 to-transparent
                                    animate-pulse'></div>
                            </div>

                            {/* Console Info with enhanced styling */}
                            <div className='mt-4 text-center'>
                                <h2 className={`max-sm:text-sm sm:text-sm md:text-xl lg:text-2xl font-bold mb-2
                                    ${console.status === 'Tersedia'
                                        ? 'text-green-400 drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]'
                                        : 'text-red-400 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]'}
                                    animate-pulse`}>
                                    {console.name}
                                </h2>

                                {/* Enhanced Status Light */}
                                <div className='flex justify-center items-center gap-2'>
                                    <div className={`relative max-sm:w-2 max-sm:h-2 sm:w-1 sm:h-1 md:w-3 md:h-3 rounded-full 
                                        ${console.status === 'Tersedia'
                                            ? 'bg-green-500 animate-pulse'
                                            : 'bg-red-500'}`}>
                                        <div className={`absolute inset-0 rounded-full 
                                            ${console.status === 'Tersedia'
                                                ? 'bg-green-400'
                                                : 'bg-red-400'}
                                            animate-ping opacity-75`}>
                                        </div>
                                    </div>
                                    <span className={`font-bold max-sm:text-xxs sm:text-xxs md:text-xs lg:text-sm xl:text-base 
                                        ${console.status === 'Tersedia'
                                            ? 'text-green-400'
                                            : 'text-red-400'}`}>
                                        {console.status}
                                    </span>
                                </div>
                            </div>

                            {/* Enhanced Game Selection Button */}
                            <button
                                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                                className={`w-full mt-4 max-sm:py-1.5 max-sm:px-3 sm:py-1 sm:px-2 md:py-2 md:px-4 rounded-lg 
                                    transition-all duration-300
                                    border-2 border-blue-500/50 hover:border-blue-400
                                    ${openDropdown === index
                                        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(0,0,255,0.3)]'
                                        : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'}
                                    font-bold max-sm:text-xxs sm:text-xxs md:text-xs lg:text-sm uppercase tracking-wider`}
                            >
                                {openDropdown === index ? '< CLOSE GAMES >' : '< SELECT GAME >'}
                            </button>

                            {/* Enhanced Game List */}
                            <div className={`overflow-hidden transition-all duration-300
                                ${openDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className='space-y-2 mt-4'>
                                    {console.games.map((game, gameIndex) => (
                                        <div key={gameIndex}
                                            className='group bg-black/60 p-3 rounded-lg 
                                                border border-blue-500/20 hover:border-blue-500/50
                                                transition-all duration-200
                                                cursor-pointer
                                                hover:bg-blue-900/20
                                                hover:transform hover:scale-105'>
                                            <h3 className='text-blue-400 font-bold text-center max-sm:text-xxs sm:text-xxxs md:text-xs lg:text-base
                                                group-hover:text-blue-300 transition-colors duration-200'>
                                                {game.title}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Machine Base */}
                        <div className={`h-8 bg-gradient-to-b from-gray-800 to-gray-900 
                            rounded-b-lg border-b-4 border-x-4
                            ${console.status === 'Tersedia'
                                ? 'border-green-500/50'
                                : 'border-red-500/50'}`}>
                            {/* Added base reflection */}
                            <div className='w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent'></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rent;