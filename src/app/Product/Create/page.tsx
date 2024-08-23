'use client'
import React, { useState } from 'react'

const ProductCreate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const inputClass = 'w-2/3 p-0.5 bg-transparent border-2 border-slate-400 rounded-sm';
    const fileInputClass = 'block w-4/6 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100';
    const labelClass = 'w-1/3 text-sm font-medium text-gray-700 mb-2';
    
    return (
        <div className='flex items-center justify-center'>
            <style jsx>{`
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
                input[type="number"] { -moz-appearance: textfield; }
            `}</style>
            <div className='grid grid-cols-2 gap-2 m-5 bg-white h-auto w-4/6 border-2 border-orange-400 shadow-md shadow-orange-400 rounded-md'>
                <div className='flex-col items-center justify-start px-10 py-5'>
                    <div className='p-2 text-sm'>
                        <label className='text-black font-normal w-full'>Product Name :</label>
                        <input className='mt-1 bg-transparent border-2 border-slate-400 rounded-sm ml-2 pl-1 p-1' placeholder='Product name' />
                    </div>
                    <div className='p-2 text-sm'>
                        <label className='text-black font-normal w-full'>Product Description :</label>
                        <textarea className='mt-1 text-slate-600 bg-transparent border-2 border-slate-400 w-3/4' />
                    </div>
                    <div className='text-black text-base w-full'>
                        <h4 className='text-black font-normal'>Compatibility Details</h4>
                        <div className='ml-2 text-sm'>
                            {['Compatible With', 'Version', 'OS', 'Language'].map((label) => (
                                <div className='flex items-center my-2' key={label}>
                                    <label className='w-1/3'>{label} :</label>
                                    <input className={inputClass} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='text-black text-base w-3/4'>
                        <h4 className='text-black font-normal'>Additional Info</h4>
                        <div className='ml-2 text-sm'>
                            {['Released On', 'Last Updated', 'Version', 'Language'].map((label) => (
                                <div className='flex items-center my-2' key={label}>
                                    <label className='w-1/3 mr-1'>{label} : </label>
                                    <input className={inputClass} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='text-sm w-full'>
                        <label className='text-base text-black font-normal w-full'>Version History</label>
                        <textarea className='mt-1 p-2 text-slate-600 bg-transparent border-2 border-slate-400 w-3/4' />
                    </div>
                </div>
                <div className='flex-col items-center justify-start px-10 py-5'>
                    <div className='w-full'>
                        <label className='text-black text-sm w-full mr-2'>App Store Link :</label>
                        <input className={inputClass} />
                    </div>
                    <div className='w-full'>
                        <div className="my-4 flex items-center justify-center">
                            <label className={labelClass}>Product file</label>
                            <input type="file" className={fileInputClass} />
                        </div>
                    </div>
                    <div className="flex items-center my-4">
                        <label className={labelClass}>Product Logo :</label>
                        <input type="file" accept="image/*" className={fileInputClass} />
                    </div>
                    <div className='w-full'>
                        <div className="flex items-center my-4">
                            <label className={labelClass}>Upload Screenshots :</label>
                            <input type="file" accept="image/*" multiple className={fileInputClass} />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className='text-black text-sm w-full mr-2'>Product Video Link :</label>
                        <input className={inputClass} />
                    </div>
                    <div className='text-black font-base text-sm py-2'>
                        <label>Product Category : </label>
                        <div className="relative inline-block text-left ml-1">
                            <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                onClick={toggleDropdown}
                            >
                                Select
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414l-6.293 6.293A1 1 0 012.293 9.293l7-7A1 1 0 0110 3z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        {['Revit', 'AutoCAD', 'Inventor', 'Fusion', 'Others'].map((category) => (
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                                key={category}
                                            >
                                                {category}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='text-black text-sm font-base py-2'>
                        <label className='text-base'>Pricing :</label>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-100 w-full">
                                    <tr>
                                        <th className="px-3 py-3 border-b border-gray-200"></th>
                                        <th className="px-3 py-3 border-b border-gray-200"></th>
                                        <th className="px-3 py-3 border-b border-gray-200 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <label className='text-center'>1 Machine</label>
                                        </th>
                                        <th className="px-3 py-3 border-b border-gray-200 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <label className='w-full'>2 Machines</label>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {['Annual Subscription', 'Perpetual License', 'Network License', 'SDK'].map((pricingOption, idx) => (
                                        <tr key={idx}>
                                            <td className="px-5 py-2 border-b border-gray-200">
                                                <input type="checkbox" className="form-checkbox h-3 w-3 text-orange-300" />
                                            </td>
                                            <td className='text-sm text-black font-light'>
                                                <label>{pricingOption}</label>
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 text-right">
                                                $ <input type='number' className="w-12 h-8 px-3 py-2 border rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 no-spin" />
                                            </td>
                                            <td className="px-5 py-2 border-b border-gray-200 text-right">
                                                $ <input type="number" className="w-12 h-8 px-3 py-2 border rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 no-spin" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-end px-10 py-5'>
                    <button className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2'>
                        Cancel
                    </button>
                    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate
