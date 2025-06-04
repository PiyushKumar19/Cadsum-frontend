'use client'

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
// import Register from '@/app/User/Register/page';

interface LoginProps {
  onSuccess: () => void;  // Accept a callback for closing the modal or handling success
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const base_url = process.env.NEXT_PUBLIC_API_URL;

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const loginUserRequest = {
      email,
      password,
    };

    try {
      const response = await fetch(`${base_url}/auth/login-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginUserRequest),
      });

      if (response.ok) {
        const result = await response.json();
        
        // Set auth token
        Cookies.set('authToken', result.token, {
          expires: 30, // Cookie will expire in 30 days
          path: '/',
          secure: true,
          sameSite: 'Lax',
        });
        
        console.log('Login successful:', result);
        onSuccess(); // Call onSuccess to close the modal or handle success
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please try again.');
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm m-0 p-0 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium">Please login to your account</h5>
        
        {error && (
          <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Logging in...' : 'Login to your account'}
        </button>
        <div className="text-sm font-medium text-gray-500 text-center">
          {"Don't have an account?"}
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 ml-1"
            onClick={() => router.push(`../${'User/Register'}`)}
          >
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;