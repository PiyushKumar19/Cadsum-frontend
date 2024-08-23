'use client'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-gray-800 w-full h-3/4'>
                <div className='flex items-center justify-center w-full'>
                    <div className='w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                        <div className="md:flex md:justify-center">
                            <div className="grid grid-cols-4 gap-14">
                                <div className="mb-6 md:mb-0">
                                    <a href="https://cadsum.com/" className="flex mb-4 items-center">
                                        <img src="https://res.cloudinary.com/alex-tech/image/upload/v1723138485/Cadsum/logo_cuy9dq.png" className="h-8 me-3" alt="Cadsum Logo" />
                                    </a>
                                    <p className="text-gray-200 font-normal">
                                        CADSUM is a CAD software development company. We provide professional consultation and services to develop 3D CAD applications and plugins.
                                    </p>
                                </div>
                                <div className='pl-10'>
                                    <h2 className="mb-4 text-sm font-semibold text-white uppercase">Products</h2>
                                    <ul className="text-gray-200 font-medium">
                                        <li className="mb-1"><a href="https://flowbite.com/" className="hover:underline">Revit</a></li>
                                        <li className="mb-1"><a href="https://tailwindcss.com/" className="hover:underline">Inventor</a></li>
                                        <li className="mb-1"><a href="https://tailwindcss.com/" className="hover:underline">Fusion</a></li>
                                        <li className="mb-1"><a href="https://tailwindcss.com/" className="hover:underline">AutoCAD</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-4 text-sm font-semibold text-white uppercase">Quick Links</h2>
                                    <ul className="text-gray-200 font-medium">
                                        <li className="mb-1"><a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Products</a></li>
                                        <li className="mb-1"><a href="https://discord.gg/4eeurUVvTy" className="hover:underline">About us</a></li>
                                        <li className="mb-1"><a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Our Services</a></li>
                                        <li className="mb-1"><a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Contact us</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-4 text-sm font-semibold text-white uppercase">Contact Info</h2>
                                    <ul className="text-gray-200 font-medium">
                                        <li className="mb-4">
                                            <p>Mail us: support@cadsum.com</p>
                                        </li>
                                    </ul>
                                    <div className="flex mt-4 sm:justify-center">
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                            </svg>
                                            <span className="sr-only">Facebook page</span>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                            </svg>
                                            <span className="sr-only">Instagram Page</span>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                                            </svg>
                                            <span className="sr-only">Twitter page</span>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.021-.01-1.854-2.465.451-3.042-.585-3.235-1.123-.113-.288-.6-1.123-1.023-1.35-.35-.185-.85-.646-.01-.66.788-.015 1.351.727 1.537 1.025.9 1.525 2.34 1.096 2.913.832.092-.65.35-1.096.637-1.35-2.187-.237-4.476-1.1-4.476-4.85 0-1.075.388-1.95 1.025-2.639-.1-.238-.45-1.225.1-2.55 0 0 .825-.253 2.7 1.025a9.175 9.175 0 0 1 2.45-.338c.837 0 1.675.113 2.45.338 1.874-1.293 2.7-1.025 2.7-1.025.55 1.325.2 2.312.1 2.55.638.688 1.025 1.563 1.025 2.639 0 3.75-2.29 4.613-4.476 4.85.363.325.688.963.688 1.95 0 1.41-.01 2.54-.01 2.888 0 .262.175.583.688.477A9.931 9.931 0 0 0 10 .333Z" clipRule="evenodd" />
                                            </svg>
                                            <span className="sr-only">GitHub account</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black'>
                    <hr className="my-4 border-gray-300" />
                    <div className='flex items-center justify-around pb-5'>
                        <div className="text-sm text-gray-200 text-start">
                            © 2023 <a href="https://flowbite.com/" className="hover:underline">Cadsum</a>. All Rights Reserved.
                        </div>
                        <div className="text-sm text-gray-200 text-end">
                            <a href='/eula' className='px-2'>EULA</a>
                            <a href='/privacyPolicy'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
