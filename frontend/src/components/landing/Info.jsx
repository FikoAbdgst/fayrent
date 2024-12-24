import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Beling from '../../../public/fc.png';
import spide from '../../../public/sp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
    const [storeStatus, setStoreStatus] = useState({
        isOpen: true,
        openTime: '09:00',
        closeTime: '21:00'
    });

    // Fetch store status from API
    useEffect(() => {
        const fetchStoreStatus = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/store-status');
                const data = await response.json();
                setStoreStatus(data);
            } catch (error) {
                console.error('Error fetching store status:', error);
            }
        };

        fetchStoreStatus();

        // Set up polling to check for updates every 30 seconds
        const interval = setInterval(fetchStoreStatus, 30000);

        return () => clearInterval(interval);
    }, []);

    // Format time for display
    const formatTime = (time) => {
        if (!time) return '';
        // If time is already in HH:mm format, return as is
        if (time.length === 5) return time;
        // If time is in HH:mm:ss format, remove seconds
        return time.substring(0, 5);
    };

    return (
        <div className='w-full max-sm:h-1/2screen sm:h-screen flex justify-center items-center relative'>
            <div className='w-1/5 flex justify-center items-center'>
                <img src={Beling} alt="beling" className='absolute -left-5 max-sm:w-36 max-sm:h-42 sm:w-56 sm:h-64 md:w-72 md:h-80 lg:w-96 lg:h-104 xl:w-104 xl:h-116' />
            </div>
            <div className='max-sm:w-4/5 sm:w-3/5 h-90%'>
                <div className='w-full h-full flex flex-col justify-start max-sm:pt-2 sm:pt-1 xl:pt-5 items-center bg-purple-950 rounded-3xl'>
                    <p className='text-yellow-300 iceland max-sm:text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl'>we are</p>
                    <div className={`relative max-sm:px-2 max-sm:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-xl ${storeStatus.isOpen
                        ? 'bg-green-500/20 border border-green-500/50 shadow-md shadow-green-400'
                        : 'bg-red-500/20 border border-red-500/50 shadow-md shadow-red-400'
                        } animate-[flicker_4s_linear_infinite]`}>
                        <span className={`max-sm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-semibold ${storeStatus.isOpen ? 'text-green-400' : 'text-red-400'
                            } animate-[flicker_4s_linear_infinite]`}>
                            {storeStatus.isOpen ? 'OPEN' : 'CLOSED'}
                        </span>
                    </div>
                    <div>
                        {storeStatus.isOpen ? (
                            <p className='text-red-500 max-sm:text-xxs sm:text-xxs md:text-xs lg:text-sm xl:text-base max-sm:mt-2 sm:mt-2 md:mt-4'>
                                Closed at: <span className='text-purple-400 underline rounded'>{formatTime(storeStatus.closeTime)}</span>
                            </p>
                        ) : (
                            <p className='text-green-500 max-sm:text-xxs sm:text-xxs md:text-xs lg:text-sm xl:text-base max-sm:mt-2 sm:mt-2 md:mt-4'>
                                Opened at: <span className='text-purple-400 underline rounded'>{formatTime(storeStatus.openTime)}</span>
                            </p>
                        )}
                    </div>
                    <a href="https://wa.me/628820013330851?text=Halo,%20saya%20ingin%20bertanya" target="_blank" rel="noopener noreferrer" className='bg-blue-950 max-sm:px-3 max-sm:py-2 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 w-4/5 max-sm:mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-3 flex items-center max-sm:rounded-lg sm:rounded-xl'>
                        <FontAwesomeIcon icon={faPhone} className="text-purple-400 max-sm:text-xs sm:text-xs lg:text-xl" />
                        <div className='ml-5'>
                            <h3 className=" max-sm:text-xxxs sm:text-xxs md:text-xs lg:text-sm xl:text-base font-bold text-purple-300">Contact Us</h3>
                            <p className="text-purple-400 max-sm:text-xxxs sm:text-xxs md:text-xs lg:text-sm xl:text-base">0882-001-333-0851</p>
                        </div>
                    </a>
                    <a href="https://www.google.com/maps?q=Jl.+Jend.+H.+Amir+Machmud+No.758,+Padasuka,+Cimahi,+Jawa+Barat" target="_blank" rel="noopener noreferrer" className='bg-blue-950 max-sm:px-3 max-sm:py-2 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 w-4/5 max-sm:mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-3 flex items-center max-sm:rounded-lg sm:rounded-xl'>
                        <FontAwesomeIcon icon={faLocationDot} className="text-purple-400 max-sm:text-xs sm:text-xs lg:text-xl" />
                        <div className='ml-5'>
                            <h3 className="max-sm:text-xxxs sm:text-xxs md:text-xs lg:text-sm xl:text-base font-bold text-purple-300">Location</h3>
                            <p className="text-purple-400 max-sm:text-xxxs sm:text-xxs md:text-xs lg:text-sm xl:text-base">
                                Jl. Jend. H. Amir Machmud No.758, Padasuka, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40526
                            </p>
                        </div>
                    </a>
                    <div className="w-4/5 max-sm:mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-3 bg-yellow-500/10 max-sm:px-3 max-sm:py-2 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 max-sm:rounded-lg sm:rounded-xl border border-yellow-500/30 shadow-md shadow-yellow-400">
                        <div className="flex items-start space-x-3">
                            <FontAwesomeIcon icon={faCircleInfo} className=" text-yellow-400 mt-1 max-sm:text-xxs sm:text-xs lg:text-xl" />
                            <div>
                                <h3 className="max-sm:text-xxxs sm:text-xxs md:text-xs lg:text-sm xl:text-base font-bold text-yellow-400 ml-1">Ketentuan Sewa PS Ke rumah</h3>
                                <ul className="text-yellow-300 mt-2 space-y-1 max-sm:text-xxxs sm:text-xxs md:text-xs lg:text-sm xl:text-base">
                                    <li>• Membawa Kartu Identitas ( KTP, Kartu Pelajar )</li>
                                    <li>• Rumah di wilayah sekitar Cimahi</li>
                                    <li>• Tidak ada alasan keterlambatan pengembalian (ketiduran, tidak ada motor, hujan, DLL)</li>
                                    <li>• Siap bertanggung jawab dan membayar denda apabila ada kerusakan / kehilangan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/5'>
                <div className='w-1/5 flex justify-center items-center'>
                    <img src={spide} alt="beling" className='absolute max-sm:-right-5 sm:right-0 max-sm:w-32 max-sm:h-40 sm:w-48 sm:h-60 md:w-64 md:h-80 lg:w-80 lg:h-100 xl:w-100 xl:h-116' />
                </div>
            </div>
            <style jsx>{`
                @keyframes flicker {
                    0%, 100% { opacity: 1; }
                    3% { opacity: 0.4; }
                    6% { opacity: 1; }
                    7% { opacity: 0.4; }
                    8% { opacity: 1; }
                    9% { opacity: 0.4; }
                    10% { opacity: 1; }
                    20% { opacity: 1; }
                    21% { opacity: 0; }
                    21.5% { opacity: 1; }
                    22% { opacity: 0; }
                    22.5% { opacity: 1; }
                    23% { opacity: 0; }
                    24% { opacity: 1; }
                    61% { opacity: 1; }
                    61.5% { opacity: 0; }
                    62% { opacity: 1; }
                    63% { opacity: 0.4; }
                    63.5% { opacity: 1; }
                    64% { opacity: 0.4; }
                    64.5% { opacity: 1; }
                    65% { opacity: 0.4; }
                    65.5% { opacity: 1; }
                    75% { opacity: 1; }
                    75.5% { opacity: 0.4; }
                    76% { opacity: 1; }
                    76.5% { opacity: 0.4; }
                    77% { opacity: 1; }
                    77.5% { opacity: 0.4; }
                    78% { opacity: 1; }
                    78.5% { opacity: 0.4; }
                    79% { opacity: 1; }
                    79.5% { opacity: 0.4; }
                    80% { opacity: 1; }
                    80.5% { opacity: 0.4; }
                    81% { opacity: 1; }
                }
            `}</style>
        </div >
    );
};

export default Info;