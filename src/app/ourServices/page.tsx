import React from 'react'

const OurServices = () => {
    return (
        <div>
             <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-96 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold">Our Services</h1>
            <p className="mt-2 text-lg text-gray-800">
            Specialized CAD plugins and SDKs for Autodesk and beyond. Custom
            solutions and expert consulting.
            </p>
          </div>
        </div>
      </header>



            <div className="bg-gray-100 p-20 pr-60 pl-60">
                <div className="flex items-center justify-center">
                    <img src="https://res.cloudinary.com/alex-tech/image/upload/v1663325862/Cadsum/Our%20Services/CAD_3D_Plugin_Development_copy_tm5vqm.png" alt="Our Vision Image" className="w-1/2 md:w-1/3"></img>
                    <div className="ml-40">
                        <h2 className="text-2xl font-bold text-gray-800">CAD 3D Plugin Development</h2>
                        <p className="text-gray-600 mt-4">
                            We develop CAD software plugins and applications based on Autodesk software as AutoCAD, Revit, Navisworks, Inventor Fusion 360 and forge platform. We also develop plugins based on Solidworks and Sketchup. Plugin functionalities can be used as a SDK (Software Development Kit) with other CAD softwares. Cadsum plugins are fast and easy to use.
                            <br></br> <br></br>
                            We provide service to upgrade user’s existing plugins.
                            Different types of license are provided to meet user requirements.
                            <br></br> <br></br>
                            For more information please contact at support@cadsum.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-20 pr-60 pl-60">
                <div className="flex items-center justify-center">
                    <div className="mr-40">
                        <h2 className="text-2xl font-bold text-gray-800">CAD 3D Plugin Customization</h2>
                        <p className="text-gray-600 mt-4">
                            Customize and develop new plugins as per user requirements. We also customize the user’s existing plugins. Services are available to develop plugins based on Autodesk software like AutoCAD, Revit, Navisworks, Inventor Fusion 360 and forge platform. Consulting services are available to develop CAD/CAM plugins and SDKs.
                            <br></br> <br></br>
                            For more information please contact at support@cadsum.com
                        </p>
                    </div>
                    <img src="https://res.cloudinary.com/alex-tech/image/upload/v1663325862/Cadsum/Our%20Services/CADSUM_CAD_Customization_yi1eod.png" alt="Our Goal Image" className="w-1/2 md:w-1/3"></img>
                </div>
            </div>

            <div className="bg-gray-100 p-20 pr-60 pl-60">
                <div className="flex items-center justify-center">
                    <img src="https://res.cloudinary.com/alex-tech/image/upload/v1663325862/Cadsum/Our%20Services/CADSUM_SDK_qeepj9.png" alt="Our Vision Image" className="w-1/2 md:w-1/3"></img>
                    <div className="ml-40">
                        <h2 className="text-2xl font-bold text-gray-800">CAD SDK Development</h2>
                        <p className="text-gray-600 mt-4">
                            Cadsum provides existing plugin features as a SDK and it can be customized as per user requirements. SDKs are designed the way that it can be easily integrated with other user applications. SDK provides functionality with setting options to export/import different file formats as OBJ, FBX, STL, DWG etc. SDKs are compatible with autodesk applications like AutoCAD, Revit, Inventor and Fusion 360. SDKs are also available for solidworks and sketchup.
                            SDK can be used using different languages like C#, C++, VB.Net
                            Solid support available to integrate SDK to user applications.
                            <br></br> <br></br>
                            To integrate sdk with your application please contact at support@cadsum.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-20 pr-60 pl-60">
                <div className="flex items-center justify-center">
                    <div className="mr-40">
                        <h2 className="text-2xl font-bold text-gray-800">Consulting Services</h2>
                        <p className="text-gray-600 mt-4">
                            Consulting services are available to develop CAD plugins, CAD Applications and SDKs.
                            <br></br>
                            To avail Consulting services please contact at support@cadsum.com
                        </p>
                    </div>
                    <img src="https://res.cloudinary.com/alex-tech/image/upload/v1663324552/Cadsum/About%20Us/CADSUM-GOAL_t3zinm.png" alt="Our Goal Image" className="w-1/2 md:w-1/3"></img>
                </div>
            </div>

            <div className="pt-10 pb-10 pl-48 pr-48 bg-gradient-to-r from-orange-200 to-orange-300 bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-xl">Talk to an expert</h2>
        <p className="mt-4">
          No Matters where your business operates, Cadsum is there to support in your inovative projects.
           </p>
        <button
          type="button"
          className="p-2 mt-6 text-sm font-medium text-orange-600 focus:outline-none border border-orange-600   hover:bg-orange-600 hover:text-white"
        >
          Contact us
        </button>
      </div>

        </div>
    )
}

export default OurServices