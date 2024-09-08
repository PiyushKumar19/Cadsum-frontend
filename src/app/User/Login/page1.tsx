'use client'

import React, { useState } from 'react';
import Cookies from 'js-cookie';

interface LoginProps {
    onSuccess: () => void;  // Accept a callback for closing the modal
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginUserRequest = {
            email,
            password,
        };

        try {
            const setAuthToken = (token: string) => {
                Cookies.set('authToken', token, {
                    maxAge: 30 * 24 * 60 * 60,  // 30 days
                    path: '/',
                    secure: true,
                    sameSite: 'lax',
                });
                onSuccess();  // Call onSuccess to close the modal after setting the token
            };

            const response = await fetch('https://localhost:7214/api/auth/login-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginUserRequest),
            });

            if (response.ok) {
                const result = await response.json();
                setAuthToken(result.token);
                console.log('Login successful:', result);
            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="w-full max-w-sm m-0 p-0 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium">Please login to your account</h5>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 text-center">
                    Don't have an account?{' '}
                    <a href="#" className="text-orange-500 hover:text-orange-600">
                        Create account
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
