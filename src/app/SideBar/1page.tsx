import React from 'react';
import Head from 'next/head';

const SideBar = () => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"
                />
            </Head>
            <div className="bg-white">
                <div className="container flex flex-col mx-auto bg-white">
                    <aside className="group/sidebar flex flex-col shrink-0 lg:w-[280px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start" id="sidenav-main">
                        <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
                            <a className="transition-colors duration-200 ease-in-out" href="https://www.loopple.com">
                                <img alt="Logo" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/loopple.svg" className="inline" />
                            </a>
                        </div>

                        <div className="hidden border-b border-double lg:block dark:border-neutral-700/70 border-neutral-300"></div>
                        {/* <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div> */}

                        <div className="relative pl-3 my-5 overflow-y-scroll">
                            <div className="flex flex-col w-full font-medium">

                                <div>
                                    <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Dashboard</a>
                                    </span>
                                </div>

                                <div>
                                    <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Products</a>
                                    </span>
                                </div>

                                <div>
                                    <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Files</a>
                                    </span>
                                </div>

                                <div>
                                    <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Users</a>
                                    </span>
                                </div>

                                <div>
                                    <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Blogs</a>
                                    </span>
                                </div>

                                <div className="block pt-5 pb-[.15rem]">
                                    <div className="flex items-center w-full px-4 py-[.65rem]">
                                        {/* <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">Applications</span> */}
                                        <button className='justify-center text-lg text-stone-500'
                                            type='submit'>Sign out</button>
                                        <svg className='ml-2 mt-0.5' width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M21.593 10.943c.584.585.584 1.53 0 2.116L18.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.552 9.552 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H8.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.562 9.562 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.883 2.893zM14 16a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.505a1 1 0 1 0 2 0V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h7a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 0-1-1z"
                                                fill="#f97316"
                                                stroke="#f97316"
                                            />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default SideBar;
