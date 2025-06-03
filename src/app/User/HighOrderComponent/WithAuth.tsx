import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Modal from '@/app/Components/Login/Modal'; 
import Login from '@/app/Components/Login/Login'; 

const withAuth = (Component: React.ComponentType<any>) => {
  const AuthWrapper: React.FC<any> = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const authToken = Cookies.get('authToken');
      if (!authToken) {
        setIsAuthenticated(false);
        setShowLoginModal(true); // Show login modal if not authenticated
      } else {
        setIsAuthenticated(true);
      }
      setLoading(false); // Done checking auth status
    }, [router]);

    const closeModal = () => {
      setShowLoginModal(false);
    };

    const handleLoginSuccess = () => {
      setIsAuthenticated(true);
      closeModal(); // Close the modal after successful login
    };

    if (loading) {
      return <div>Loading...</div>; // Show a loading spinner or message
    }

    if (!isAuthenticated) {
      return (
        <>
          <Modal show={showLoginModal} onClose={closeModal}>
            <Login onSuccess={handleLoginSuccess} />
          </Modal>
        </>
      );
    }

    return <Component {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
