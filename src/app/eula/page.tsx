import React from 'react'

const EULA = () => {
    return (
        <div>

            <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-64 flex items-center justify-center">
                <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
                <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 pr-16 pl-16 rounded-lg">
                    <h1 className="text-4xl text-gray-800 font-bold font-poppins">EULA</h1>
                    <p className="mt-2 text-lg text-gray-800 font-lato">
                    End User License Agreement
                    </p>
                </div>
                </div>
            </header>
            

            <div className=" text-base text-gray-900 font-normal ml-48 mr-48 mt-12 font-lato">

                <p className="mb-4 ">If you do not fully agree with the terms and conditions of this agreement you should remove the software from your computer immediately. </p>
                <p className="mb-4">By downloading or using the Product, you are bound to agree with the terms and conditions of this Agreement.</p>
                <p className="mb-4">If you do not agree to the terms of this Agreement, remove the software from your computer immediately.</p>
                <p className="mb-4">Where this software is deployed to students or employees, the school/college, employer, organization or authority is required to make this license agreement and the CADSUM Product Privacy Policy available to end-users or agrees to accept them on their behalf.</p>
                <p className="mb-4">The license granted under this agreement authorizes the license to use the Product as specified by the License Type.</p>
                <p className="mb-4"><b>Refund & Cancellation policy: </b>Refund & Cancellation policy: No refund will be provided in any case as we are providing 18-days of free trial of every product, use the trial version and if you are fully satisfied they only decide to make any purchase.</p>
                <p className="mb-4"><b>Warranty: </b> The product will be provided as-it-is the full featured trial version of 18-days, you should test the models before buying the license as Data Translation is not a perfect science.  And Licensor makes no warranties with respect to the Product.</p>
                <p className="mb-4">For license policy <a className="text-blue-800" href='cadsum.com/license-policy'>click here</a>.</p>
                <p className="mb-20">Go through our <a className="text-blue-800" href='cadsum.com/privacy-policy'>Privacy Policy</a>.</p>
            </div>
        </div>
    )
}

export default EULA