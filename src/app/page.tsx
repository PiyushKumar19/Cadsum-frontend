import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container mx-auto text-center text-white py-28 bg-slate-600">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-2">Simplyfy your cad conversions</p>
      </div>

      <div>
        <h1 className="text-4xl text-center mt-5 font-semibold">Our Latest Plugins</h1>

      </div>

      <div className="flex justify-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
          <img
            className="w-full"
            src="https://res.cloudinary.com/alex-tech/image/upload/v1723372347/Cadsum/Products/Revit_STL_290_225_jez0t6.png"
            alt="STL exporter for Revit"
          ></img>
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
          ></img>
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
          ></img>
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

      <div className="container flex  mx-auto text-center text-white py-5 bg-gray-900 mt-10">
        <p className="mt-2 justify-start">Have a project or plugin to develop?</p>

        <button
          type="button"
          className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-green-500 rounded-full  hover:bg-green-600 hover:text-white"
        >
          Get Quotation
        </button>
      </div>


      <div className="bg-gray-100 p-20 pr-60 pl-60">
        <div className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/alex-tech/image/upload/v1663336532/Cadsum/Home/CAD_Customization_uctkgw.png"
            alt="Our Vision Image"
            className="w-1/2 md:w-1/3"
          ></img>
          <div className="ml-40">
            <h2 className="text-2xl font-bold text-gray-800">CAD Plugin Customization</h2>
            <p className="text-gray-600 mt-4">
              Customize and develop new plugins as per user requirements. We also customize the user’s existing plugins. Services are available to develop plugins based on Autodesk software like AutoCAD, Revit, Navisworks, Inventor, Fusion 360 and forge platform. Consulting services are available to develop CAD/CAM plugins and SDKs.
              For more information please contact at support@cadsum.com
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-20 pr-60 pl-60">
        <div className="flex items-center justify-center">
          <div className="mr-40">
            <h2 className="text-2xl font-bold text-gray-800">CAD Development</h2>
            <p className="text-gray-600 mt-4">
              We develop CAD software plugins and applications based on Autodesk software as AutoCAD, Revit, Navisworks, Inventor Fusion 360 and forge platform. We also develop plugins based on Solidworks and Sketchup. You can use our plugins as a SDK (Software Development Kit) with other CAD softwares.
              For more information please contact at support@cadsum.com
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/alex-tech/image/upload/v1663336532/Cadsum/Home/CAD_Customization_2_vvpwza.png"
            alt="Our Goal Image"
            className="w-1/2 md:w-1/3"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Home