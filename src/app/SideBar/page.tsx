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