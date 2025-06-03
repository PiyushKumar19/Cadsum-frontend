'use client'

import { useRouter } from 'next/navigation';
import Login from '@/app/Components/Login/Login';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // Handle successful login - redirect to dashboard or home page
    router.push('/dashboard'); // Change this to your desired redirect path
    // Alternatively, you could redirect to the previous page:
    // router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Login onSuccess={handleLoginSuccess} />
    </div>
  );
}