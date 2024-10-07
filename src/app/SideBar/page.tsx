'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Home, Settings, User } from 'lucide-react';
import { jwtDecode, JwtPayload } from "jwt-decode";
import Cookies from 'js-cookie';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface CustomJwtPayload extends JwtPayload {
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: string;
}

// Separate component for conditional navigation
const ConditionalNavigation = ({ setIsAdmin }: { setIsAdmin: (value: boolean) => void }) => {
  useEffect(() => {
    const checkToken = () => {
      const authToken = Cookies.get("authToken");
      if (authToken) {
        try {
          const decodedToken = jwtDecode<CustomJwtPayload>(authToken);
          // const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          console.log("Decoded Token:", decodedToken);
          console.log("Extracted Role:", role);
          setIsAdmin(role === "Admin");
        } catch (error) {
          console.error("Error decoding token:", error);
          setIsAdmin(false);
        }
      } else {
        console.log("No authToken found in cookies");
        setIsAdmin(false);
      }
    };

    checkToken();
  }, [setIsAdmin]);

  return null;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/Admin/dashboard', icon: <Home className="w-6 h-6" /> },
  { name: 'Products', href: '/Admin/Products', icon: <User className="w-6 h-6" /> },
  { name: 'Orders', href: '/Admin/Orders', icon: <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#000000" stroke-width="1.5"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#000000" stroke-width="1.5"></path> <path d="M11 10.8L12.1429 12L15 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg> },
  { name: 'Settings', href: '/settings', icon: <Settings className="w-6 h-6" /> },
  { name: 'Profile', href: '/User/Profile', icon: <User className="w-6 h-6" /> },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Inside the ConditionalNavigation component
  useEffect(() => {
    const checkToken = () => {
      const authToken = Cookies.get("authToken");
      if (authToken) {
        try {
          const decodedToken = jwtDecode<CustomJwtPayload>(authToken);
          const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          const isAdminRole = role === "Admin";
          setIsAdmin(isAdminRole);
          console.log("isAdmin:", isAdminRole); // Log isAdmin here
        } catch (error) {
          console.error("Error decoding token:", error);
          setIsAdmin(false);
        }
      } else {
        console.log("No authToken found in cookies");
        setIsAdmin(false);
      }
    };

    checkToken();
  }, [setIsAdmin]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white text-black h-screen ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && <Image src="/logo.png" alt="Logo" width={85} height={85}></Image>}
          <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-orange-500">
            {isCollapsed ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>
        </div>
        <nav className="flex-1">
          <ul>
            {navItems
              .filter(item => !(item.name === 'Profile' && isAdmin)) // Exclude profile if isAdmin is true
              .map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center p-4 rounded-sm mx-2 hover:bg-orange-400 ${isCollapsed ? 'justify-center' : 'space-x-4'}`}
                  >
                    {item.icon}
                    {!isCollapsed && <span>{item.name}</span>}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;