'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar/page";
import FooterComponent from "./Components/App/footerComponent";
import SideBar from "./SideBar/page";
import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} ${isAdmin ? 'flex' : ''} min-h-screen`}>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

        {/* ConditionalNavigation to set isAdmin state */}
        <ConditionalNavigation setIsAdmin={setIsAdmin} />

        {/* Sidebar or Nav */}
        {isAdmin ? <SideBar /> : <NavBar />}

        {/* Main content */}
        <div className="flex-grow bg-slate-100">
          {children}
        </div>

        {/* Show Footer only if isAdmin is false */}
        <footer>
        {!isAdmin && <FooterComponent />}
      </footer>
      </body>
    </html>
  );
}
