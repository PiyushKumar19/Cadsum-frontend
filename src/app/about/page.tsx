import React from 'react'

const AboutUs = () => {
  return (
    <div>

        <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-96 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold font-poppins">About Us</h1>
            <p className="mt-2 text-lg text-gray-800 font-lato">
              At CADSUM, we specialize in custom 3D CAD applications and plugins
              that streamline model exports.
            </p>
          </div>
        </div>
      </header>

      <div className="p-20 pr-32 pl-32">
                <div className="flex justify-center">
                    <div className="mr-40">
                    <div className="flex items-center space-x-2">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-2xl font-poppins">What is CADSUM?</h2>
                    </div>
                        <p className="text-gray-950 text-base mt-4 font-lato">
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
                        src="\Images\What is Cadsum.png"
                        alt="Cadsum Image"
                        className="w-1/2 md:w-2/5"
                    />
                </div>
            </div>

      <div className="bg-gray-100 p-20 pr-60 pl-60">
        <div className="flex">
          <img src="\Images\Our Vision.png" alt="Our Vision Image" className="w-1/2 md:w-1/3"></img>

          <div className="ml-60">
                    <div className="flex items-center space-x-2">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-2xl font-poppins">Our Vision</h2>
                    </div>
                    <p className='font-lato text-base text-gray-950 mt-4'> Our vision is to bring our customer requirements into reality. We strive to provide a
              simple user interface that will help the end-user to understand and use the
              application quickly. Our solutions should contribute to engineering as well as the
              education field.</p>
          </div>

        </div>
      </div>

      <div className="bg-white p-20 pr-60 pl-60">
        <div className="flex">
  

          <div className="mr-60">
                    <div className="flex items-center space-x-2">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-2xl font-poppins">Our Goal</h2>
                    </div>
                    <p className='font-lato text-base text-gray-950 mt-4'> Our goal is to deliver products and services with customer’s
                    satisfaction and good experience. We strive to deliver economic, fast, light and efficient solutions.</p>
                    
          </div>
          <img src="/Images/Our Goal.png" alt="Our Goal Image" className="w-1/2 md:w-1/3"></img>
        </div>
      </div>

      

      <div className="pt-10 pb-10 pl-32 pr-32 text-center bg-gradient-to-r from-orange-200 to-orange-300 bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-xl text-gray-900 font-semibold font-poppins">Contact Information</h2>
        <p className="mt-4 font-lato text-base text-gray-900">
          Questions? Get in Touch
            </p>
        <button
          type="button"
          className="p-2 mt-6 text-sm font-poppins font-medium text-orange-600 focus:outline-none border border-orange-600   hover:bg-orange-600 hover:text-white"
        >
          Contact us
        </button>
      </div>

      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-white py-8">
  <div className="flex flex-col items-center">
    <div className="flex items-center space-x-2 mt-1">
      <hr className="w-12 border-t-2 border-orange-500 mt-2" />
      <h2 className="text-orange-600 font-semibold text-2xl font-poppins">Our Clients</h2>
    </div>
    <p className="mt-2 text-base text-black font-lato">
      We are trusted by the world’s most innovative teams
    </p>
  </div>

  <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"></img>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"></img>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"></img>
      <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"></img>
      <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"></img>
    </div>
    </section>


    </div>
  )
}

export default AboutUs