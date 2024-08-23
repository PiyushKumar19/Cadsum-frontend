"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '../User/Login/Modal'
import Login from '../User/Login/page'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

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

              <div className="relative inline-block text-left ml-1">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700
                    hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500"
                  onClick={toggleDropdown}
                >
                  Help
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000">
                      </path>
                    </g>
                  </svg>
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {['License Policy', 'Activation Guide', 'Contact Us', 'FAQ', 'EULA'].map((category) => (
                        <a
                          href=""
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          key={category}
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* <a href="/contactUs" className="flex items-center hover:after:content-[''] hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-500">
                Help
              </a> */}
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-1">
          <button className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button">
            <span>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L3.48218 1.8274C4.40456 2.13485 5.08481 2.9223 5.25498 3.87955L6.71188 12.0746C6.93695 13.3405 8.03763 14.2628 9.32349 14.2628H19.43C20.6115 14.2628 21.6505 13.4815 21.9784 12.3465L23.8942 5.71505C24.3841 4.01886 23.1113 2.32628 21.3457 2.32628H8.9577M10.284 18.9048C10.284 20.0035 9.3933 20.8943 8.29456 20.8943C7.19583 20.8943 6.30514 20.0035 6.30514 18.9048C6.30514 17.8061 7.19583 16.9154 8.29456 16.9154C9.3933 16.9154 10.284 17.8061 10.284 18.9048ZM20.8943 18.9048C20.8943 20.0035 20.0035 20.8943 18.9048 20.8943C17.8061 20.8943 16.9154 20.0035 16.9154 18.9048C16.9154 17.8061 17.8061 16.9154 18.9048 16.9154C20.0035 16.9154 20.8943 17.8061 20.8943 18.9048Z" stroke="#3E3E3E" strokeWidth="1.25" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <button
            className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
            onClick={openModal}
          >
            <span>Log In</span>
          </button>
          <button className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button">
            <span>Sign in</span>
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
