import React from 'react'

const Home = () => {
    return (
        <div className='bg-white'>
            <div className="flex items-center justify-end text-white pt-32 pb-32 bg-cover bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/alex-tech/image/upload/v1723965495/Cadsum/Banner%20and%20logos/sl_063022_51250_12_gkxp9t.jpg')]">
                <div className="text-right">
                    <h1 className="text-3xl font-bold md:w-1/2 lg:w-1/3">
                        Find the right CAD solution for you <br />
                        <span className='text-orange-500 font-semibold'>Cadsum</span> offers flexible options, Annual, Perpetual, and Network
                        Licenses
                    </h1>
                </div>
            </div>

            <div className="flex justify-center items-center  pt-3 pb-3 pl-8 pr-8 text-white bg-black">
                <p>
                    Try products free for 18 days, instant access & no credit card
                    required
                </p>
                <button
                    type="button"
                    className="ml-16 p-2 text-sm font-medium text-white focus:outline-none bg-orange-500 rounded-md  hover:bg-orange-600 hover:text-white"
                >
                    Start Free Trial
                </button>
            </div>

            <div className="p-20 pr-32 pl-32">
                <div className="flex justify-center">
                    <div className="mr-40">
                    <div className="flex items-center space-x-2">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-2xl">What is CADSUM?</h2>
                    </div>
                        <p className="text-gray-600 mt-4">
                            CADSUM is a leading CAD software development company that excels
                            in creating custom 3D CAD applications and plugins. Our plugins
                            simplifies exporting models in various file formats.
                            <br />
                            <br />
                            It ensures seamless integration across different software
                            platforms, enhancing efficiency and precision in your design
                            workflows. Trust CADSUM to deliver innovative solutions that
                            streamline your design and manufacturing processes.
                        </p>
                    </div>
                    <img
                        src="https://res.cloudinary.com/alex-tech/image/upload/v1723961599/Cadsum/Home/What_is_Cadsum_tzfnj0.jpg"
                        alt="Cadsum Image"
                        className="w-1/2 md:w-2/5"
                    />
                </div>
            </div>

            <div className='bg-gray-200 pr-32 pl-32 pt-8 pb-8'>

            <div className="flex flex-col items-center ">
                    <div className="flex items-center space-x-2 mt-1">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-2xl">Our Plugins</h2>
                    </div>
                    <p>Explore the range of plugins provided by CADSUM</p>
                </div>

            <div className="flex justify-center">
                <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
                    <img
                        className="w-full"
                        src="https://res.cloudinary.com/alex-tech/image/upload/v1723372347/Cadsum/Products/Revit_STL_290_225_jez0t6.png"
                        alt="STL exporter for Revit"
                    />
                    <div className="px-2 py-2">
                        <div className="font-bold text-l mb-2 text-center">
                            Cadsum STL exporter for Revit
                        </div>
                    </div>
                </div>

                <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
                    <img
                        className="w-full"
                        src="https://res.cloudinary.com/alex-tech/image/upload/v1723372347/Cadsum/Products/Revit_STL_290_225_jez0t6.png"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-2 py-2">
                        <div className="font-bold text-l mb-2 text-center">
                            Cadsum STL exporter for Revit
                        </div>
                    </div>
                </div>

                <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
                    <img
                        className="w-full"
                        src="https://res.cloudinary.com/alex-tech/image/upload/v1723372347/Cadsum/Products/Revit_STL_290_225_jez0t6.png"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-2 py-2">
                        <div className="font-bold text-l mb-2 text-center">
                            Cadsum STL exporter for Revit
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button
                    type="button"
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-orange-500 rounded-full  hover:bg-orange-600 hover:text-white"
                >
                    Explore More
                </button>
            </div>

            </div>


            <div className="pt-10 pb-10 pl-32 pr-32 bg-gradient-to-r from-orange-200 to-orange-300 bg-opacity-50">
        <h2 className="text-xl">Talk to an expert</h2>
        <p className="mt-4">
        One of our specialists will get in touch to assist you in identifying the optimal solution for your product development challenges.
        </p>
        <button
          type="button"
          className="p-2 mt-6 text-sm font-medium text-orange-600 focus:outline-none border border-orange-600   hover:bg-orange-600 hover:text-white"
        >
          Contact us
        </button>
      </div>

            <div className="pl-32 pr-32 pb-8">

                <div className="mt-12 flex flex-col items-center">
                    <div className="flex items-center space-x-2 mt-1">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-2xl">
                            Why Cadsum Plugins?
                        </h2>
                    </div>
                    <p className="mt-2 text-base">
                        The Cadsum plugin delivers rapid, precise results with an intuitive
                        interface, 24/7 support, and flexible customization.
                    </p>
                </div>

                <div className="flex justify-center  mt-8 ">
                    <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                            Rapid and Precise Results
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 ">
                            Cadsum plugin delivers rapid and precise results, ensuring
                            efficiency in your workflow.
                        </p>
                    </div>

                    <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                            Simple & User-friendly Interface
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 ">
                            The Cadsum plugin features an intuitive, user-friendly interface.
                        </p>
                    </div>

                    <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                            24/7 Quick Support
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 ">
                            Free, round-the-clock support is available for your convenience.
                        </p>
                    </div>

                    <div className="max-w-sm p-4 w-1/4 m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
                            Flexible Plugin Customization
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 ">
                            Cadsum provides on-demand customization to enhance functionality &
                            specific needs.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-gray-200 pt-8 pb-8 pl-32 pr-32">

                <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-2 mt-1">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-2xl">Our Services</h2>
                    </div>
                    <p>Cadsum provides various services in CAD/CAM</p>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="max-w-sm w-1/3 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow">
                        <svg
                            width="60px"
                            height="60px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M16 11L17.6965 12.5268C19.239 13.9151 20.0103 14.6093 20.0103 15.5C20.0103 16.3907 19.239 17.0849 17.6965 18.4732L16 20"
                                    stroke="#f97316"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    opacity="0.5"
                                    d="M13.9868 5L10 20"
                                    stroke="#f97316"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    d="M8.00005 4.82959L6.30358 6.35641C4.76102 7.74471 3.98975 8.43886 3.98975 9.32959C3.98975 10.2203 4.76102 10.9145 6.30358 12.3028L8.00005 13.8296"
                                    stroke="#f97316"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                            </g>
                        </svg>{" "}
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                                CAD Development
                            </h5>
                        </a>
                        <p className="font-normal text-gray-500 ">
                            We develop CAD software plugins and applications based on Autodesk
                            software as AutoCAD, Revit, Navisworks, Inventor Fusion 360 and
                            forge platform. We also develop plugins based on Solidworks and
                            Sketchup. You can use our plugins as a SDK (Software Development
                            Kit) with other CAD softwares.
                        </p>
                    </div>

                    <div className="max-w-sm p-6 w-1/3 m-4 bg-white border border-gray-200 rounded-lg shadow">
                        <svg
                            width="60px"
                            height="60px"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g id="customize">
                                    {" "}
                                    <g id="customize_2">
                                        <path
                                            id="Combined Shape"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.9882 18.127C10.9882 16.811 11.8288 15.6922 13.002 15.2772V11.0986H7C6.44828 11.0986 6 11.5469 6 12.0986V36.0986C6 36.6503 6.44828 37.0986 7 37.0986H19.966C20.5183 37.0986 20.966 37.5463 20.966 38.0986C20.966 38.6509 20.5183 39.0986 19.966 39.0986H7C5.34372 39.0986 4 37.7549 4 36.0986V12.0986C4 10.4423 5.34372 9.09863 7 9.09863H13.002V7.12183C13.002 6.56954 13.4497 6.12183 14.002 6.12183C14.5543 6.12183 15.002 6.56954 15.002 7.12183V9.09863H24.002C24.5543 9.09863 25.002 9.54634 25.002 10.0986L25.0017 10.1245L25.002 10.1504V27.2176C26.185 27.628 27.0342 28.7523 27.0342 30.0752C27.0342 31.3981 26.1851 32.5211 25.002 32.9311V37.0986H41C41.5517 37.0986 42 36.6503 42 36.0986V12.0986C42 11.5469 41.5517 11.0986 41 11.0986H28.002C27.4497 11.0986 27.002 10.6509 27.002 10.0986C27.002 9.54634 27.4497 9.09863 28.002 9.09863H33.002V7.13983C33.002 6.58754 33.4497 6.13983 34.002 6.13983C34.5543 6.13983 35.002 6.58754 35.002 7.13983V9.09863H41C42.6563 9.09863 44 10.4423 44 12.0986V36.0986C44 37.7549 42.6563 39.0986 41 39.0986H25.002V41.0004C25.002 41.5527 24.5543 42.0004 24.002 42.0004C23.4497 42.0004 23.002 41.5527 23.002 41.0004V32.925C21.8288 32.5101 20.9882 31.3913 20.9882 30.0752C20.9882 28.7591 21.8288 27.6391 23.002 27.2237V11.0986H15.002V15.2712C16.1851 15.6811 17.0342 16.8042 17.0342 18.127C17.0342 19.4499 16.185 20.5742 15.002 20.9847V34.0518C15.002 34.6041 14.5543 35.0518 14.002 35.0518C13.4497 35.0518 13.002 34.6041 13.002 34.0518V20.9786C11.8288 20.5631 10.9882 19.4431 10.9882 18.127ZM14.041 19.1506C14.0281 19.1501 14.0151 19.1498 14.002 19.1498C13.9917 19.1498 13.9814 19.15 13.9712 19.1503C13.4253 19.1297 12.9882 18.6795 12.9882 18.127C12.9882 17.5622 13.4456 17.105 14.0102 17.105C14.5766 17.105 15.0342 17.562 15.0342 18.127C15.0342 18.6824 14.5925 19.1343 14.041 19.1506ZM33.002 26.9786C31.8288 26.5631 30.9882 25.4431 30.9882 24.127C30.9882 22.811 31.8288 21.6922 33.002 21.2772V14.1498C33.002 13.5975 33.4497 13.1498 34.002 13.1498C34.5543 13.1498 35.002 13.5975 35.002 14.1498V21.2712C36.1851 21.6811 37.0342 22.8042 37.0342 24.127C37.0342 25.4499 36.185 26.5742 35.002 26.9847V34.0518C35.002 34.6041 34.5543 35.0518 34.002 35.0518C33.4497 35.0518 33.002 34.6041 33.002 34.0518V26.9786ZM35.0342 24.127C35.0342 23.562 34.5766 23.105 34.0102 23.105C33.4456 23.105 32.9882 23.5622 32.9882 24.127C32.9882 24.6926 33.4463 25.151 34.0102 25.151C34.5759 25.151 35.0342 24.6927 35.0342 24.127ZM25.0342 30.0752C25.0342 29.5095 24.5759 29.0512 24.0102 29.0512C23.4463 29.0512 22.9882 29.5097 22.9882 30.0752C22.9882 30.6401 23.4456 31.0972 24.0102 31.0972C24.5766 31.0972 25.0342 30.6403 25.0342 30.0752Z"
                                            fill="#f97316"
                                        ></path>{" "}
                                    </g>{" "}
                                </g>{" "}
                            </g>
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                                CAD Plugin Customization
                            </h5>
                        </a>
                        <p className="font-normal text-gray-500 ">
                            Customize and develop new plugins as per user requirements. We also
                            customize the user’s existing plugins. Services are available to
                            develop plugins based on Autodesk software like AutoCAD, Revit,
                            Navisworks, Inventor, Fusion 360 and forge platform.{" "}
                        </p>
                    </div>

                    <div className="max-w-sm p-6  m-4 w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <svg
                            width="60px"
                            height="60px"
                            viewBox="0 -2 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#f97316"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    id="consultation"
                                    d="M440.618,340.924A.994.994,0,0,1,440,340V308a5.005,5.005,0,0,1,5-5h1v-1a5.005,5.005,0,0,1,5-5h32a5.005,5.005,0,0,1,5,5v22a5.005,5.005,0,0,1-5,5h-1v1a5.005,5.005,0,0,1-5,5H447.414l-5.707,5.707A.994.994,0,0,1,441,341,.981.981,0,0,1,440.618,340.924ZM442,308v29.586l4.293-4.292A1,1,0,0,1,447,333h30a3,3,0,0,0,3-3V308a3,3,0,0,0-3-3H445A3,3,0,0,0,442,308Zm5-6v1h30a5.005,5.005,0,0,1,5,5v20h1a4,4,0,0,0,4-4V302a4,4,0,0,0-4-4H451A4,4,0,0,0,447,302Zm4,21a1,1,0,0,1,0-2h20a1,1,0,0,1,0,2Zm0-6a1,1,0,1,1,0-2h20a1,1,0,0,1,0,2Z"
                                    transform="translate(-440 -297)"
                                    fill="#f97316"
                                ></path>{" "}
                            </g>
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                                CAD Counsulting
                            </h5>
                        </a>
                        <p className="font-normal text-gray-500 ">
                            Consulting services are available to develop CAD/CAM plugins and
                            SDKs. For more information please contact at support@cadsum.com
                        </p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button
                        type="button"
                        className=" py-2.5 px-5 me-2 text-sm font-medium text-white focus:outline-none bg-orange-500 rounded-full  hover:bg-orange-600 hover:text-white">
                        Explore More
                    </button>
                </div>
            </div>

            <div className="bg-white p-20 pr-32 pl-32">
                <div className="flex  justify-center">
                    <div className="mr-40">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Features & Benifits
                        </h2>
                        <p className="text-gray-600 mt-4 mb-8">
                            Cadsum plugins is the ultimate choice for exporting files at
                            diffrent settings.
                        </p>

                        <button
                            type="button"
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-orange-500 rounded-full  hover:bg-orange-600 hover:text-white"
                        >
                            Explore Products
                        </button>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="bg-white p-4 rounded-sm border border-black ">
                                <h2 className="text-xl font-semibold mb-2">Boost quality</h2>
                                <p>
                                    Cadsum products exports best quality of outputs with precise
                                    results.
                                </p>{" "}

                            </div>

                            <div className="bg-white p-4  rounded-sm border border-black ">
                                <h2 className="text-xl font-semibold mb-2">
                                    Multiple Licenses
                                </h2>
                                <p>
                                    Our licenses are available in Anual, Perpitual, and Network
                                    Licenses
                                </p>{" "}

                            </div>

                            <div className="bg-white p-4 rounded-sm border border-black ">
                                <h2 className="text-xl font-semibold mb-2">Low Cost</h2>
                                <p>
                                    Get the best value for your money with our affordable pricing.
                                </p>{" "}

                            </div>

                            <div className="bg-white p-4 rounded-sm border border-black ">
                                <h2 className="text-xl font-semibold mb-2">
                                    Free Technical Support
                                </h2>
                                <p>We offers free technical support to help you with issue.</p>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-16 pl-32 pr-32  text-center bg-cover bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/alex-tech/image/upload/v1723999420/Cadsum/Home/Precise_Result_Banner_eop5gz.jpg')]">
                <h2 className="text-xl">Exporting with Precise Results</h2>
                <p className="mt-4">
                    Cadsum plugins undergo in Multiple test cases to deliver the precise
                    output of the model
                </p>
            </div>

            <div className="mt-12 flex flex-col items-center">
                <div className="flex items-center space-x-2 mt-1">
                    <hr className="w-12 border-t-4 border-orange-500 mt-2" />
                    <h2 className="text-orange-600 font-bold text-2xl">Clients Feedback</h2>
                </div>
                <div className="flex">
                    <p className="text-3xl text-black font-bold mr-2">
                        What's Our Clients Say About
                    </p>
                    <p className="text-3xl text-orange-600 font-bold">Cadsum</p>
                </div>
            </div>

            <div className="mt-12 mb-10  w-full flex justify-center items-center ">
                <section className="max-w-screen-xl  mx-auto text-center">
                    <figure className="max-w-screen-md mx-auto">
                        <svg
                            className="h-12 mx-auto mb-3 text-gray-400"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.017 18V10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983V18H0Z"
                                fill="currentColor"
                            />
                        </svg>
                        <blockquote>
                            <p className="text-xl font-medium text-gray-900 md:text-2xl">
                                "Landwind is just awesome. It contains tons of predesigned
                                components and pages starting from login screen to complex
                                dashboard. Perfect choice for your next SaaS application."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <div className="pr-3 font-medium text-gray-900 ">Micheal Gough</div>
                            </div>
                        </figcaption>
                    </figure>
                </section>

                

            </div>
            <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-white py-8">
  <div className="flex flex-col items-center">
    <div className="flex items-center space-x-2 mt-1">
      <hr className="w-12 border-t-2 border-orange-500 mt-2" />
      <h2 className="text-orange-500 font-semibold text-2xl">Our Clients</h2>
    </div>
    <p className="mt-2 text-base text-black">
      We are trusted by the world’s most innovative teams
    </p>
  </div>

  <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"/>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"/>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"/>
      <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"/>
      <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"/>
    </div>
    </section>
</div>
    )
}

export default Home