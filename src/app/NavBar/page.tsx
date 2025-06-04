"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Modal from '../Components/Login/Modal'
import Login from '../Components/Login/Login'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { AuthDialog } from '../Components/AuthDialog'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleAuthDialog, setToggleAuthDialog] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [isClient, setIsClient] = useState(false);
  const [token, setToken] = useState<string | null>(null);


  const router = useRouter();

  const handleToggleAuthDialog = () => {
    setToggleAuthDialog(!toggleAuthDialog);
  };

  const handleAuthDialogClose = (open: boolean) => {
    setToggleAuthDialog(open);
    if (!open) {
      // Refresh token state when dialog closes
      const authToken = Cookies.get('authToken');
      setToken(authToken || null);
    }
  };

  // Check if the user is authenticated
  const checkAuth = () => {
    const authToken = Cookies.get('authToken');
    if (!authToken) {
      openModal();
    }
  };

  function handleLogout() {
    const authToken = Cookies.get("authToken");
    if (authToken) {
      Cookies.remove("authToken", {
        path: '/',
        secure: true,
        sameSite: 'Lax',
      });
      setToken(null); // Update state immediately
      router.push('/');
    }
  }

  function handleRoutePush(path: string) {
    router.push(`/${path}`);
  }

  useEffect(() => {
    // checkAuth();
    // This runs only on the client side
    setIsClient(true);
    const authToken = Cookies.get('authToken');
    setToken(authToken || null);  // Set token from cookie on client
  }, []);

  if (!isClient) {
    // Avoid rendering until client-side
    return null;
  }

  return (
    <div className="w-full">
      <nav className="sticky top-0 z-10 flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-white border border-white shadow-md bg-opacity-100 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <a href="#" className="mr-4 block cursor-pointer py-1.5">
          <Image src="/logo.png" alt="Logo" width={85} height={85}></Image>
        </a>
        <div className="flex items-center gap-4 justify-center">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="block p-1 font-poppins text-sm hover:after:transition-all hover:after:duration-500 hover:ease-in hover:text-black hover:font-semibold antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/Home" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Home
              </a>
            </li>
            <li className="block p-1 font-poppins text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/Products" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Products
              </a>
            </li>
            <li className="block p-1 font-poppins text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/about" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                About Us
              </a>
            </li>
            <li className="block p-1 font-poppins text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/ourServices" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Our Services
              </a>
            </li>
            <li className="block p-1 font-poppins text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">

              <div className="relative inline-block text-left ml-1">
                <button
                  type="button"
                  className="inline-flex  font-poppins justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-blue-gray-900 relative
                    hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500"
                  onClick={toggleDropdown}
                >
                  Help
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000">
                      </path>
                    </g>
                  </svg>
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {['License Policy', 'Activation Guide', 'ContactUs', 'FAQ', 'EULA'].map((page) => (
                        <a
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          key={page}
                          onClick={() => {
                            if (page === 'Activation Guide') {
                              router.push(`../activation-guide`)
                            }
                            else if (page === 'ContactUs') {
                              router.push(`../contactUs`)
                            }
                            else if (page === 'License Policy') {
                              router.push(`../LicensePolicy`)
                            }
                            else if (page === 'EULA') {
                              router.push(`../eula`)
                            }
                            else if (page === 'FAQ') {
                              router.push(`../faq`)
                            }
                            else {
                              router.push(`../${page.replace(' ', '')}`)
                            }
                          }}
                        >
                          {page}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-1">
          {token ? (

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto">
                  <img src="/Images/User/user.png" alt="User" />

                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => handleRoutePush('User/Profile')}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500" onSelect={() => handleLogout()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button className="hidden mr-4 text-center align-middle transition-all  select-none disabled:pointer-events-none disabled:opacity-50 shadow-gray-900/10 hover:shadow-gray-900/20  lg:inline-block"
              type="button"
              onClick={handleToggleAuthDialog}
            >
              <span>
                <img src="/Images/User/user.png" alt="User" />
              </span>
            </button>
          )}
          {toggleAuthDialog ? <AuthDialog open={toggleAuthDialog} onOpenChange={setToggleAuthDialog} /> : null}

          <button className="hidden select-none rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 py-2 px-4 text-center align-middle font-poppins text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Get Quote</span>
          </button>
        </div>
        <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </nav>


    </div>
  )
}

export default NavBar