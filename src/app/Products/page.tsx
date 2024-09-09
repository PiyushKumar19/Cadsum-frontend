'use client'; // Mark this as a client component

import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/Products/productCard';
import { Product } from '../Interfaces/ProductList/ProductListDto';
import Link from 'next/link';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productCategory, setProductCategory] = useState('All Products');

  function applyFilter(category: string) {
    if (category === "All Products") {
      setFilteredProducts(products);
    } else if (category === "Others") {
      setFilteredProducts(products.filter(product => product.category === "Others"));
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://localhost:7214/api/Products/get-all-products');
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

  useEffect(() => {
    applyFilter(productCategory);
  }, [productCategory, products]);

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
          {["All Products", "Revit", "AutoCAD", "Inventor", "Fusion", "Others"].map((category) => (
            <button
              key={category} // Unique key for each button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white  focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
              onClick={() => setProductCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          {filteredProducts.map((product) => (
            <div className="max-w-xs hover:transform hover:scale-110 hover:duration-100 rounded overflow-hidden shadow-lg m-10">
              <Link href={`/Products/${product.id}`}>
                <div className="cursor-pointer h-full flex flex-col justify-between">
                  <div className="flex justify-center flex-grow h-4/5">
                    <img
                      className="w-2/4 h-auto object-contain mx-auto"
                      src={product.productLogo}
                      alt="Product Logo"
                    ></img>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 mt-auto h-1/5">
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
