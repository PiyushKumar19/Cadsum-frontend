import React from 'react'
import ProductCard from '../Components/Products/productCard'

const Products = () => {
    return (
        <div>
            <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-96 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold">Products</h1>
            <p className="mt-2 text-lg text-gray-800">
            Explore our range of innovative plugins that simplify integration
              and boost productivity.
            </p>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center  pt-3 pb-3 pl-8 pr-8 text-white bg-gray-800">
                <p>
                All our products are available in Single and Network Licenses
                </p>
       </div>

      <div>
        <div className="text-center mt-10">
        
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            All Products
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Revit
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            AutoCAD
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border  hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Inventor
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border  hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Fusion
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border  hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Other Products
          </button>
        </div>

        <div className="flex justify-center">
          <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
            <img
              className="w-full"
              src="https://res.cloudinary.com/alex-tech/image/upload/v1723372347/Cadsum/Products/Revit_STL_290_225_jez0t6.png"
              alt="STL exporter for Revit"
            />
            <div className="px-2 py-2">
              <div className="font-bold text-l mb-2 text-center">
                Cadsum STL exporter for Revit
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
            <img
              className="w-full"
              src="https://res.cloudinary.com/alex-tech/image/upload/v1723372347/Cadsum/Products/Revit_STL_290_225_jez0t6.png"
              alt="Sunset in the mountains"
            />
            <div className="px-2 py-2">
              <div className="font-bold text-l mb-2 text-center">
                Cadsum STL exporter for Revit
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
            <img
              className="w-full"
              src="https://res.cloudinary.com/alex-tech/image/upload/v1723372347/Cadsum/Products/Revit_STL_290_225_jez0t6.png"
              alt="Sunset in the mountains"
            />
            <div className="px-2 py-2">
              <div className="font-bold text-l mb-2 text-center">
                Cadsum STL exporter for Revit
              </div>
            </div>
          </div>
        </div>
      </div>

            <nav className="flex gap-3 flex-wrap items-center justify-center text-lg mt-8">
                <a className="text-center my-2 inline-block w-20 rounded-full bg-orange-400 bg-opacity-50 px-1 py-1 font-light text-orange-500 duration-200 hover:bg-opacity-100 hover:text-white hover:no-underline sm:w-28"
                    href="/react">All Products</a>
                <a className="text-center my-2 inline-block w-20 rounded-full bg-orange-400 bg-opacity-50 px-1 py-1 font-light text-orange-500 duration-200 hover:bg-opacity-100 hover:text-white hover:no-underline sm:w-28"
                    href="/solid">Solid</a>
                <a className="text-center my-2 inline-block w-20 rounded-full bg-orange-400 bg-opacity-50 px-1 py-1 font-light text-orange-500 duration-200 hover:bg-opacity-100 hover:text-white hover:no-underline sm:w-28"
                    href="/svelte">Svelte</a>
                <a className="text-center my-2 inline-block w-20 rounded-full bg-orange-400 bg-opacity-50 px-1 py-1 font-light text-orange-500 duration-200 hover:bg-opacity-100 hover:text-white hover:no-underline sm:w-28"
                    href="/vue">Vue</a>
                <a className="text-center my-2 inline-block w-20 rounded-full bg-orange-400 bg-opacity-50 px-1 py-1 font-light text-orange-500 duration-200 hover:bg-opacity-100 hover:text-white hover:no-underline sm:w-28"
                    href="/angular">Angular</a>
            </nav>
            <div className='my-2 mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 p-2'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    )
}

export default Products