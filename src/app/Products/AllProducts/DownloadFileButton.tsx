import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Modal from '@/app/Components/Login/Modal';
import Login from '@/app/Components/Login/Login';

interface DownloadFileButtonProps {
  filepath: string;
}

export const DownloadFileButton: React.FC<DownloadFileButtonProps> = ({ filepath }) => {
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Function to check authentication and open modal if needed
  const checkAuth = () => {
    const authToken = Cookies.get('authToken');
    if (!authToken) {
      setIsAuthenticated(false);
      setShowModal(true); // Open modal if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  };

  // Function to handle file download
  const allowDownload = () => {
    if (isAuthenticated) {
      const link = document.createElement('a');
      link.href = filepath;
      link.download = filepath.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      checkAuth(); // Check authentication and possibly open modal
    }
  };

  return (
    <div>
      <div className='flex w-full my-3'>
        <button className='justify-start bg-[#F97306] w-24 h-10 px-3 py-2 text-xs font-light text-white'>Get Quote</button>
        <button
          type='button'
          onClick={allowDownload}
          className='justify-start ml-2 w-40 h-10 px-3 py-2 border-2 border-solid border-[#F97306] text-xs font-light text-[#F97306] hover:bg-[#F97306] hover:text-white hover:transition-all hover:duration-300'>
          Download Free Trial
        </button>
      </div>

      {/* Render the modal if showModal is true */}
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Login onSuccess={() => {
            setShowModal(false);
            setIsAuthenticated(true); // Update authentication state on successful login
          }} />
        </Modal>
      )}
    </div>
  );
};
