import React from 'react'

const LicenseTypes = () => {
    return (
        <div>
            <div className="w-full text-center text-gray-900 py-16 bg-gray-300 mb-20">
                <h1 className="text-3xl font-bold">License Types</h1>
                <p className="mt-2">We provides diffrent types of licenses according to your use case</p>
            </div>

            <div className=" text-base text-gray-900 font-normal ml-48 mr-48">

                <p className="mb-4">There are 4 types of licenses:</p>

                <p className="mb-2 text-lg font-semibold">Annual Subscription(1 year, Single machine):</p>
                <ul className="list-disc mx-10 mb-4">
                    <li>Subscription is valid for 1 year.</li>
                    <li>Non-transferable, as the license is locked to the single machine license.</li>
                    <li>Upgraded version will be provided within the subscription period.</li>
                    <li>The Internet is required to activate the license after that it can be used without internet.</li>
                </ul>


                <p className="mb-2 text-lg font-semibold">Perpetual License(Lifetime, Single machine):</p>

                <ul className="list-disc mx-10 mb-4">
                    <li>Subscription is valid for Lifetime.</li>
                    <li>Non-transferable, as the license is locked to the single machine license.</li>
                    <li>Free upgrade for the first year, 50% of the license cost for the further upgrades.</li>
                    <li>Upgrades are optional, you can keep using the license on the same version of application.</li>
                    <li>The Internet is required to activate the license after that it can be used without internet.</li>
                </ul>

                <p className="mb-2 text-lg font-semibold">Floating/Network License(1 year, Multiple machine):</p>

                <ul className="list-disc mx-10 mb-4">
                    <li>Subscription is valid for 1 year.</li>
                    <li>Transferable, can be used in multiple machines but on a single machine at a time</li>
                    <li>Upgraded version will be provided within the subscription period.</li>
                    <li>Active Internet is required to use the plugin.</li>
                </ul>

                <p className="pb-2 text-lg font-semibold">License for SDK:</p>

            </div>
        </div>
    )
}

export default LicenseTypes