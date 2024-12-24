import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (credentials.username === 'FAYIZIKIR' && credentials.password === 'Win12345') {
            // Menyimpan status login ke dalam LocalStorage
            localStorage.setItem('isLoggedIn', 'true');
            toast.success('Login berhasil!', {
                duration: 2000,
                position: 'top-right',
                style: {
                    background: '#4ade80',
                    color: '#fff'
                },
            });
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } else {
            toast.error('Username atau password salah!', {
                duration: 2000,
                position: 'top-right',
                style: {
                    background: '#ef4444',
                    color: '#fff'
                },
            });
        }
    };

    return (
        <div className="min-h-screen bg-[rgb(0,0,52)] flex items-center justify-center overflow-hidden">
            <Toaster />
            <div className="absolute bg-sky-600 blur-3xl rounded-full w-80 h-80 max-md:top-20 md:top-14 lg:top-20 xl:top-36 -left-64"></div>
            <div className="absolute bg-sky-600 blur-3xl rounded-full w-80 h-80 max-md:bottom-0 md:-bottom-10 lg:bottom-4 xl:bottom-14 -right-52"></div>

            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Login Admin</h2>
                    <p className="mt-2 text-gray-600">Silahkan masuk ke akun Anda</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={credentials.username}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan username"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={credentials.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
