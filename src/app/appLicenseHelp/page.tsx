import React from 'react'

const AppLicenseHelp = () => {
    return (
        <div>
            <div className="w-full text-center text-gray-900 py-16 bg-gray-300 mb-20">
                <h1 className="text-3xl font-bold">App License Activation Help</h1>
            </div>

            <div className=" text-base text-gray-900 font-normal ml-48 mr-48">

                <p className="mb-4"><b>1. Activate(Internet is required): </b> Steps to activate your license: </p>
                <p className="mb-4">After purchasing the product you will get a license key by email. </p>
                <p className="mb-2">Step 1: Enter the license key (1.1)</p>
                <p className="mb-4">Step 2: Press Activate button. (1.2)</p>
                <p className="mb-4"><b>2. Activate Offline(Without Internet): </b> This option is only available if you are unable to activate your license using the first method given above. </p>
                <p className="mb-4">After purchasing the product you need to follow the below steps for offline activation:</p>
                <p className="mb-2">Step 1: Press Save to create a license request file. (2.1)</p>
                <p className="mb-2">Step 2: Email the request file to the email address cadsuminfo@gmail.com to get a response file. </p>
                <p className="mb-2">Step 3: Press the Open button to load the response file. (2.2)</p>
                <p className="pb-20">Step 4: Press Activate button. (2.3)</p>

            </div>
        </div>
    )
}

export default AppLicenseHelp