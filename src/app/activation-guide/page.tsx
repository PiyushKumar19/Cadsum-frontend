import React from 'react'

function activationGuide() {
  return (
    <div>
         <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-64 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold font-poppins">Activation Guide</h1>
            <p className="mt-2 text-lg text-gray-800 font-lato">
            Follow the steps below to activate the license.
            </p>
          </div>
        </div>
      </header>

      <div>

        <div className='mt-8 mr-32 ml-32 mb-8 rounded bg-white p-10'>

        <div className='flex justify-center'>

      <div className="flex items-center space-x-2">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-xl font-poppins">Activate(Internet is required)</h2>
                    </div>
                    </div>

      
        <div className='font-lato text-gray-800 text-base'>
        <p className="mt-4"><b>Step 1: </b> After purchasing the product you will get a license key by email.</p>
        <p className="mt-1"><b>Step 2: </b> Go to the Help menu of plugin in the ribbon of the software.</p>
        <p className="mt-1"><b>Step 3: </b> {"Paste the license key into the provided field and click the 'Activate' button. Refer to the image below for guidance."}</p>
        <p className="mt-1"><b>Step 4: </b> You will see a popup confirming the successful activation of your product.</p>
        </div>


        <div className='items-center flex flex-col mt-8'>

      <div className="flex items-center space-x-2">
                        <hr className="w-12 border-t-2 border-orange-500 mt-2" />
                        <h2 className="text-orange-600 font-semibold text-xl font-poppins">Activate Offline(Without Internet)</h2>
                       
                    </div>
                    <p className="mt-2 text-base font-lato">
                        Offline Activation is only available if you are unable to activate your license using the first method given above.
                    </p>
                    </div>

      
        <div className='font-lato text-gray-800 text-base'>
        <p className="mt-4"><b>Step 1: </b> After purchasing the product you will get a license key by email.</p>
        <p className="mt-1"><b>Step 2: </b> Go to the Help menu of plugin in the ribbon of the software.</p>
        <p className="mt-1"><b>Step 3: </b> Press Save to create a license request file. (2.1)</p>
        <p className="mt-1"><b>Step 4: </b> Email the request file to the email address cadsuminfo@gmail.com to get a response file.</p>
        <p className="mt-1"><b>Step 5: </b> Press the Open button to load the response file. (2.2)</p>
        <p className="mt-1"><b>Step 6: </b> Press Activate button. (2.3)</p>
        <p className="mt-2">If you encounter any issues while activating your license, please contact us for assistance.</p>
        </div>

      </div>

      </div>



    </div>
  )
}

export default activationGuide