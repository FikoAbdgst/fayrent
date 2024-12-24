import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Masih digunakan untuk auth saja

const Dashboard = () => {
    const [storeStatus, setStoreStatus] = useState({
        isOpen: true,
        openTime: '09:00',
        closeTime: '21:00',
    });

    const [consoles, setConsoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Check login status
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [navigate]);

    // Fetch initial data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch store status
                const storeRes = await fetch('http://localhost:5000/api/store-status');
                if (!storeRes.ok) throw new Error('Failed to fetch store status');
                const storeData = await storeRes.json();

                // Fetch consoles
                const consolesRes = await fetch('http://localhost:5000/api/consoles');
                if (!consolesRes.ok) throw new Error('Failed to fetch consoles');
                const consolesData = await consolesRes.json();

                setStoreStatus(storeData);
                setConsoles(consolesData);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // Polling every 30 seconds
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    const formatTimeTo24Hour = (time) => {
        if (!time) return '00:00';
        if (time.length === 5) return time;
        return time.substring(0, 5);
    };

    // Update store status
    const updateStoreStatus = async (updates) => {
        try {
            const response = await fetch('http://localhost:5000/api/store-status', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updates),
            });

            if (!response.ok) throw new Error('Failed to update store status');

            const updatedStatus = await response.json();
            setStoreStatus(prev => ({ ...prev, ...updates }));
            setError(null);
        } catch (err) {
            setError('Failed to update store status');
            console.error('Error updating store status:', err);
        }
    };

    // Toggle console status
    const toggleConsoleStatus = async (id) => {
        try {
            const console = consoles.find(c => c.id === id);
            if (!console) return;

            const response = await fetch(`http://localhost:5000/api/consoles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tersedia: !console.tersedia }),
            });

            if (!response.ok) throw new Error('Failed to update console status');

            setConsoles(prevConsoles =>
                prevConsoles.map(c =>
                    c.id === id ? { ...c, tersedia: !c.tersedia } : c
                )
            );
            setError(null);
        } catch (err) {
            setError('Failed to update console status');
            console.error('Error updating console status:', err);
        }
    };

    const logout = () => {
        Cookies.remove('isLoggedIn');
        navigate('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 p-8 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            {/* Glow Effects */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Error Display */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-2 rounded-lg mb-4 text-center">
                        {error}
                    </div>
                )}

                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
                    ADMIN DASHBOARD
                </h1>

                {/* Logout Button */}
                <div className="text-center mb-8">
                    <button
                        onClick={logout}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>

                {/* Store Status Section */}
                <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-blue-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,255,0.2)]">
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">Store Status</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-purple-300">Store is currently:</span>
                            <button
                                onClick={() => updateStoreStatus({ isOpen: !storeStatus.isOpen })}
                                className={`px-4 py-2 rounded-md font-bold transition-all duration-300 ${storeStatus.isOpen
                                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50'
                                    : 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50'
                                    }`}
                            >
                                {storeStatus.isOpen ? 'OPEN' : 'CLOSED'}
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-purple-300 mb-2">
                                    Opening Time
                                </label>
                                <input
                                    type="time"
                                    value={formatTimeTo24Hour(storeStatus.openTime)}
                                    onChange={(e) => updateStoreStatus({ openTime: e.target.value })}
                                    className="w-full bg-gray-900/50 border border-blue-500/30 rounded px-3 py-2 text-blue-400 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-purple-300 mb-2">
                                    Closing Time
                                </label>
                                <input
                                    type="time"
                                    value={formatTimeTo24Hour(storeStatus.closeTime)}
                                    onChange={(e) => updateStoreStatus({ closeTime: e.target.value })}
                                    className="w-full bg-gray-900/50 border border-blue-500/30 rounded px-3 py-2 text-blue-400 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Consoles Section */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,255,0.2)]">
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">Console Status</h2>
                    <div className="space-y-4">
                        {consoles.map((console) => (
                            <div
                                key={console.id}
                                className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <span className="text-purple-300 font-bold">
                                    {console.name}
                                </span>
                                <button
                                    onClick={() => toggleConsoleStatus(console.id)}
                                    className={`px-4 py-2 rounded-md font-bold transition-all duration-300 ${console.tersedia
                                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50'
                                        : 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50'
                                        }`}
                                >
                                    {console.tersedia ? 'TERSEDIA' : 'TIDAK TERSEDIA'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;