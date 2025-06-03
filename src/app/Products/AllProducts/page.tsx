'use client'; // Mark this as a client component

import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/Products/productCard';
import { Product } from '../../Interfaces/ProductList/ProductListDto';
import Link from 'next/link';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Products/get-all-products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log("---> from useEffect", products);

  return (
    <div>
      <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-96 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">

          <div className="bg-gradient-to-r from-yellow-100 to-orange-300  p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold font-poppins">Products</h1>
            <p className="mt-2 text-lg text-gray-800 font-lato">
              Explore our range of innovative plugins that simplify integration
              and boost productivity.
            </p>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center  pt-3 pb-3 pl-8 pr-8 text-white bg-gray-800">
        <p className='font-lato'>
          All our products are available in Single and Network Licenses
        </p>
      </div>

      <div>
        <div className="text-center mt-10">

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            All Products
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Revit
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            AutoCAD
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-full border  hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Inventor
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-full border  hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Fusion
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-full border  hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
          >
            Other Products
          </button>
        </div>

        <div className="flex justify-center">
          {products.map((product) => (
            <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg m-10">
              <Link href={`/Products/${product.id}`}>
                <div className="block cursor-pointer">
                  <div className="flex justify-center">
                    <img
                      className="w-2/3 mx-auto"
                      src={product.productLogo}
                      alt="Product Logo"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <div className="font-bold text-base font-lato text-center">
                      {product.productName}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Products;
