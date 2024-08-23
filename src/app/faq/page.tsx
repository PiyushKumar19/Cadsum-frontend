import React from 'react'

const FAQ = () => {
    return (
        <div className='bg-gray-100'>
             <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-96 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold">FAQ</h1>
            <p className="mt-2 text-lg text-gray-800">
            Get clarity on our products and services with our comprehensive
              FAQ.
            </p>
          </div>
        </div>
      </header>
            <div className="max-w-screen-xl mx-auto pt-1 pb-4 min-h-sceen m-10 rounded-lg bg-white">
               
                <div className="grid divide-y divide-neutral-200 max-w-6xl mx-auto mt-8">
                    <div className="py-2">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>How to download free trail of CADSUM plugin?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            You can get a free trial of CADSUM plugin directly from the cadsum website product page by pressing “Download free trial” button as well as from autodesk app-store.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>How to get paid version license of CADSUM plugin?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            You can get a paid version license of CADSUM plugin directly from the cadsum website as well from the autodesk app store. To get more info, please contact us at CadsumInfo@gmail.com
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>How to activate license?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            Once you purchase a plugin from us we will send you an invoice with a license key. Using that license key you can activate your plugin.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>What is the difference between Trail and Paid version plugins?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            Feature-wise there is no difference between trial and paid version. Trial version is valid only for 18 days.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>How to install/uninstall CADSUM plugins?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            Download CADSUM plugin msi from website or from Autodesk app store and double click on it. Then it will ask for administrative permission. Press yes and you will be ready to go working with this plugin.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>How to use CADSUM SDKs?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            To know how to use SDK , please contact at support@cadsum.com
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Can we upgrade our existing plugin to latest plugin?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            Yes, you can upgrade your existing plugin in latest plugin. To know more, please contact at support@cadsum.com
                            </p>
                        </details>
                    </div>
                   
                </div>
            </div>

            <div className="pt-10 pb-10 pl-32 pr-32 text-center bg-gradient-to-r from-orange-200 to-orange-300 bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-xl">Contact Information</h2>
        <p className="mt-4">
          More Questions? Get in Touch
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

export default FAQ