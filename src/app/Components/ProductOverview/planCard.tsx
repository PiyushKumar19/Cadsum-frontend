import React from 'react'

const planCard = () => {
    return (
        <div className="rounded-md bg-white w-auto border border-orange-300 shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-shadow duration-200 ease-in-out">
            <div className="flex-col items-center justify-center p-6">
                <h2 className="text-lg font-normal text-center">Annual Subscription</h2>
                <h3 className="text-base font-light mt-2 text-center">$59/year</h3>

                <hr className="w-11/12 h-0.5 bg-orange-500 mx-auto my-4 border-0" />

                <ul className="list-disc list-inside text-sm font-light">
                    <li>Single Machine</li>
                    <li>Non-Transferable</li>
                    <li>Yearly Subscription</li>
                    <li>Free Upgrade</li>
                    <li>Internet Not required</li>
                </ul>

                <div className="flex items-center justify-center mt-4">
                    <button className="bg-orange-500 text-white text-sm py-2 px-4 rounded transition duration-200 ease-in hover:bg-orange-600">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>

    )
}

export default planCard