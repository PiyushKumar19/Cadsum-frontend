import React from 'react'
import ProductCard from '../Components/Products/productCard'

const Products = () => {
    return (
        <div>
            <nav className="flex gap-3 flex-wrap items-center justify-center text-lg mt-8">
                <a className="text-center my-2 inline-block w-20 rounded-full bg-orange-400 bg-opacity-50 px-1 py-1 font-light text-orange-500 duration-200 hover:bg-opacity-100 hover:text-white hover:no-underline sm:w-28"
                    href="/react">React</a>
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