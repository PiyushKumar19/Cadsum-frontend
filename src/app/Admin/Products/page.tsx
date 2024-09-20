'use client'

import { Product } from "@/app/Interfaces/ProductList/ProductListDto";
import Products from "@/app/Products/AllProducts/page";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { List } from "react-feather";

const ProductList = () => {
  const router = useRouter();
  // const [products, setProducts] = useState(List<Product> || null)
  // useEffect(() => {

  // }, [products]) // this depedency array with products will make sure to re-render the page if new Data is added like new product

  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://localhost:7214/api/Products/get-all-products?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  function sentToCreate() {
    router.push('./Products/Create')
  }
  
  // Fetch products on component mount and whenever the page changes
  useEffect(() => {
    fetchProducts();
  }, [pageNumber, pageSize]);

  const handleDelete = async (productId: string) => {
    try {
      const response = await fetch(
        `https://localhost:7214/api/Admin/delete-product?id=${productId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log('Product delete successful:', result);

        // Refetch the updated product list after deletion
        fetchProducts();
      } else {
        console.error('Product Delete failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during deletion:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); //  returns a string in the format "MM/DD/YYYY, HH:MM:SS AM/PM"
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Products</h2>
          <span className="text-xs">All products item</span>
        </div>
        <div className="flex items-center">
          <div className="ml-10 space-x-4">
            <button className="flex bg-orange-500 hover:bg-orange-600 px-4 py-2 w-auto rounded-md text-white font-semibold"
            onClick={sentToCreate}>
              Add New
              <svg className="ml-1" width="24px" height="24px" viewBox="0 0 21.00 21.00" xmlns="http://www.w3.org/2000/svg" fill="#f97316"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)">
                <path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682"></path>
                <path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z"
                  fill="#ffffff"
                  stroke="#ffffff">
                </path> <path d="m12.5 2.5.953 1"
                  fill="#f97316"
                  stroke="#f97316">
                </path> </g> </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                {["Product Name", "Category", "Released On", "Actions"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={product.productLogo}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.productName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {product.version}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {formatDate(product.releasedOn)}
                    </p>
                  </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {product.qrt}
                    </p>
                  </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold text-2-900 leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`flex inset-0 opacity-50 rounded-full`}
                      >
                        <button className="hover:bg-yellow-400 hover:rounded-sm w-auto">
                          <svg className="mx-2" width="28px" height="28px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#c6bf01" stroke="#c6bf01" strokeWidth="1.26"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fillRule="evenodd" stroke="#f0e800" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"> <path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682"></path> <path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z"></path>
                            <path d="m12.5 2.5.953 1"></path> </g> </g></svg>
                        </button>
                        {/* Delete */}
                        <button onClick={() => handleDelete(product.id)}>
                          <svg className="mx-2" width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f61e1e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <path d="M10 12V17" stroke="#f61e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M14 12V17" stroke="#f61e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M4 7H20" stroke="#f61e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#f61e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#f61e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path> </g></svg>
                        </button>
                      </span>
                      {/* <span className="relative">{product.status}</span> */}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            {/* <span className="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span> */}
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-orange-500 font-semibold py-2 px-4 rounded-l"
                onClick={() => setPageNumber(pageNumber-1)}>
                Prev
              </button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-orange-500 font-semibold py-2 px-4 rounded-r"
                onClick={() => setPageNumber(pageNumber+1)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
