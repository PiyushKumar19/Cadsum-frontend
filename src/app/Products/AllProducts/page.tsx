'use client'; // Mark this as a client component

import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/Products/productCard';
import { Product } from '../../Interfaces/ProductList/ProductListDto';
import Link from 'next/link';
import Image from 'next/image';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Products/get-all-products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products); // Initialize filtered products
        console.log("Fetched products:", data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === 'All Products') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        product.productName?.toLowerCase().includes(selectedCategory.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = ['All Products', 'Revit', 'AutoCAD', 'Inventor', 'Fusion', 'Other Products'];

  console.log("---> from useEffect", products);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <header className="bg-gradient-to-r from-yellow-100 to-orange-300 h-96 flex items-center justify-center">
        <div className="relative container mx-auto text-center text-white h-full flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-300 p-8 rounded-lg">
            <h1 className="text-4xl text-gray-800 font-bold font-poppins">Products</h1>
            <p className="mt-2 text-lg text-gray-800 font-lato">
              Explore our range of innovative plugins that simplify integration
              and boost productivity.
            </p>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center pt-3 pb-3 pl-8 pr-8 text-white bg-gray-800">
        <p className='font-lato'>
          All our products are available in Single and Network Licenses
        </p>
      </div>

      <div>
        <div className="text-center mt-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={`py-2.5 px-5 me-2 mb-2 text-sm font-poppins font-medium rounded-full border mr-5 shadow-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-400 text-white border-orange-400'
                  : 'text-gray-900 bg-white hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg m-10">
                <Link href={`/Products/${product.id}`}>
                  <div className="block cursor-pointer">
                    <div className="flex justify-center">
                      {/* Option 1: Using regular img with error handling */}
                      {/* <img
                        className="w-2/3 mx-auto"
                        src={product.productLogo}
                        alt={`${product.productName} Logo`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-image.png'; // Fallback image
                        }}
                      /> */}
                      
                      {/* Option 2: Using Next.js Image (uncomment if you configure domains) */}
                      { product.productLogo != null ? (
                      <Image
                        className="w-2/3 mx-auto"
                        src={product.productLogo}
                        alt={`${product.productName} Logo`}
                        width={200}
                        height={150}
                        style={{ objectFit: 'contain' }}
                        onError={() => console.log('Image failed to load')}
                      />
                     ) : (
                       <Image
                         className="w-2/3 mx-auto"
                         src="/public/stl Icon.png"
                         alt="Placeholder Image"
                         width={200}
                         height={150}
                         style={{ objectFit: 'contain' }}
                       />
                     )}

                    </div>
                    <div className="px-2 py-2">
                      <div className="font-bold text-base font-lato text-center">
                        {product.productName}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600">No products found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;