'use client'; // Mark this as a client component

import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/Products/productCard';
import { Product } from '../Interfaces/ProductList/ProductListDto';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

  console.log("---> from useEffect", products);

  return (
    <div>
      <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-96 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-300 p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold">Products</h1>
            <p className="mt-2 text-lg text-gray-800">
              Explore our range of innovative plugins that simplify integration
              and boost productivity.
            </p>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center pt-3 pb-3 pl-8 pr-8 text-white bg-gray-800">
        <p>
          All our products are available in Single and Network Licenses
        </p>
      </div>

      <div>
        <div className="text-center mt-10">
          {["All Products", "Revit", "AutoCAD", "Inventor", "Fusion", "Other"].map((category) => (
            <button
              key={category}
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white mr-5 shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-center flex-wrap">
          {
            products.length > 0 ? (
              products.map((product) => {
                console.log("---> product", product); // Log the product here
                return <ProductCard key={product.id} product={product} />;
              })
            ) : (
              <p>No products available</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
