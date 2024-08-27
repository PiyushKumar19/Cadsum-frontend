import React from 'react'

const AboutAppHelp = () => {
    return (
        <div>
            <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-64 flex items-center justify-center">
                <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
                <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 pr-16 pl-16 rounded-lg">
                    <h1 className="text-4xl text-gray-800 font-bold font-poppins">About App Help</h1>
                    <p className="mt-2 text-lg text-gray-800 font-lato">
                    Product Help Page.
                    </p>
                </div>
                </div>
            </header>
           

            <div className=" text-base text-gray-900 font-normal ml-48 mr-48 font-lato bg-white rounded p-10 m-20">
                <div className='justify-center flex'>
                <img  src="\Images\App Help Image.png"/>
                </div>

                <p className="mb-4 mt-4"><b>1. Product Name: </b> This represents the product name.</p>
                <p className="mb-4 mt-4"><b>2. Product Version: </b> This represents the version of product.</p>
                <p className="mb-4"><b>3. License Type : </b> This represents the current license type of the product.</p>
                <p className="mb-2">There are 4-types of licenses we provides: </p>
                <ul className="list-decimal mx-10 mb-4">
                    <li>Trial License.</li>
                    <li>Annual Subscription</li>
                    <li>Perpetual License</li>
                    <li>License for SDK</li>
                </ul>
                <p className="mb-4"><b>4. License Validity: </b> This represents the validity of  your license.</p>
                <ul className="list-decimal mx-10 mb-4">
                    <li>Trial License: Trial version comes with 18 days validity. It can be used to export maximum 50 models for testing purposes only.</li>
                    <li>Annual Subscription: This license is valid for 365 days with all updates.</li>
                    <li>Perpetual License: This license is valid for life time and all updates are free for one year.</li>
                    <li>License for SDK: Using SDK you can integrate the plugin in your application</li>
                </ul>
                <p className="mb-2">To know more about license types <a href='cadsum.com/license-types'> click here.</a></p>
                <p className="pb-20">For more information please contact us: <a href='cadsum.com/contactus'> Contact Us</a></p>

            </div>
        </div>
    )
}

export default AboutAppHelp