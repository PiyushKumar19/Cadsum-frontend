"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '../User/Login/Modal'
import Login from '../User/Login/page'

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  return (
    <div className="w-full">
      <nav className="sticky top-0 z-10 flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-white border border-white shadow-md bg-opacity-100 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <a href="#" className="mr-4 block cursor-pointer py-1.5">
          <Image src="/image.png" alt="Logo" width={85} height={85} />
        </a>
        <div className="flex items-center gap-4 justify-center">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="block p-1 font-sans text-sm hover:after:transition-all hover:after:duration-500 hover:ease-in hover:text-black hover:font-semibold antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/Home" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Home
              </a>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/Products" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Products
              </a>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/about" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                About Us
              </a>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/ourServices" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Our Services
              </a>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
              <a href="/contactUs" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-1">
          <button className="hidden mr-4 text-center align-middle transition-all  select-none disabled:pointer-events-none disabled:opacity-50 shadow-gray-900/10 hover:shadow-gray-900/20  lg:inline-block" 
          type="button"
          onClick={openModal}
          >
            <span>
              <svg width="24px" height="24px" fill="#000000" viewBox="0 0 24 24" id="user" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <path id="primary" d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z"></path></g>
              </svg>    
               </span>
          </button>
          <button className="hidden select-none rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button">
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

      <Modal show={showModal} onClose={closeModal}>
        <Login />
      </Modal>

      {/* <div className="max-w-screen-md py-12 mx-auto">
          <div
            className="relative flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <img alt="nature" className="h-[32rem] w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80" />
          </div>
          <h2
            className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
            What is Material Tailwind
          </h2>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Can you help me out? you will get a lot of free exposure doing this
            can my website be in english?. There is too much white space do less
            with more, so that will be a conversation piece can you rework to
            make the pizza look more delicious other agencies charge much lesser
            can you make the blue bluer?. I think we need to start from scratch
            can my website be in english?, yet make it sexy i&apos;ll pay you in
            a week we don&apos;t need to pay upfront i hope you understand can
            you make it stand out more?. Make the font bigger can you help me
            out? you will get a lot of free exposure doing this that&apos;s
            going to be a chunk of change other agencies charge much lesser. Are
            you busy this weekend? I have a new project with a tight deadline
            that&apos;s going to be a chunk of change. There are more projects
            lined up charge extra the next time.
          </p>
        </div> */}

    </div>
  )
}

export default NavBar
