import React, { useState, useEffect } from 'react'
import Modal from '../Login/Modal'
import Login from '../Login/page'
import Cookies from 'js-cookie'

const CallLogin = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const checkAuth = () => {
    const authToken = Cookies.get('authToken');
    if (!authToken) {
      setIsAuthenticated(false);
      openModal(); // Open modal if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    // Call checkAuth to validate auth token on component mount
    checkAuth();
  }, []);
  return (
    <div>
        {showModal && (
        <Modal show={showModal} onClose={closeModal}>
          <Login onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  )
}

export default CallLogin