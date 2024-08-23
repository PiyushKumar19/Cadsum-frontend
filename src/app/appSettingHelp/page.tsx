import React from 'react'

const AppSettingHelp = () => {
    return (
        <div>
            <div className="w-full text-center text-gray-900 py-16 bg-gray-300 mb-20">
                <h1 className="text-3xl font-bold">App Settings Help</h1>
            </div>

            <div className=" text-base text-gray-900 font-normal ml-48 mr-48">

                <p className="mb-1 font-bold">1. Export type ASCII:</p>
                <p className="mb-4">Using this option you can export stl file in ASCII format.</p>

                <p className="mb-1 font-bold">2. Export type Binary:</p>
                <p className="mb-4">Using this option you can export stl file in binary format.</p>

                <p className="mb-1 font-bold">3. Export with color:</p>
                <p className="mb-4">Color can be exported with stl binary format using this option.</p>

                <p className="mb-1 font-bold">4. Decimal Place Precision:</p>
                <p className="mb-4">Using this option you can choose the precision of your exported model as per your requirement. You can set it from 3 to 15 as per your need.</p>

                <p className="mb-1 font-bold">5. Level of Details:</p>
                <p className="mb-4">Using this option you can choose the Detailing of your exported model as per your requirement. You can set it from 3 to 15 as per your need.</p>

                <p className="mb-1 font-bold">6. Conversion Unit:</p>
                <p className="mb-4">Using this option you can set the unit  in which you want to export your model.</p>

                <p className="mb-1 font-bold">7. Save My Settings:</p>
                <p className="mb-4">Using this options you can save your last setting options.</p>

                <p className="mb-1 font-bold">8. Reset All:</p>
                <p className="mb-4">Using this button you can set all setting options as default.</p>

                <p className="mb-1 font-bold">9. Export:</p>
                <p className="mb-4">Finally press this button to export your model.</p>

                <p className="pb-20">For more information please contact us: <a href='cadsum.com/contactus'> Contact Us</a></p>

            </div>
        </div>
    )
}

export default AppSettingHelp