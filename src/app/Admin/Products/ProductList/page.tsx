import React from "react";

const ProductList = () => {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Products</h2>
          <span className="text-xs">All products item</span>
        </div>
        <div className="flex items-center">
          <div className="ml-10 space-x-4">
            <button className="flex bg-orange-500 hover:bg-orange-600 px-4 py-2 w-auto rounded-md text-white font-semibold">
              Add New
              <svg className="ml-1" width="24px" height="24px" viewBox="0 0 21.00 21.00" xmlns="http://www.w3.org/2000/svg" fill="#f97316"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)">
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
              {[
                {
                  name: "Obj Converter for Revit",
                  role: "Revit",
                  date: "Jan 21, 2020",
                  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  statusColor: "2",
                },
                {
                  name: "Blake Bowman",
                  role: "Admin",
                  date: "Jan 01, 2020",
                  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
                  statusColor: "2",
                }
              ].map((product, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={product.img}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {product.role}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {product.date}
                    </p>
                  </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {product.qrt}
                    </p>
                  </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold text-${product.statusColor}-900 leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`flex inset-0 opacity-50 rounded-full`}
                      >
                        <button className="hover:bg-yellow-400 hover:rounded-sm w-auto">
                          <svg className={`mx-${product.statusColor}`} width="28px" height="28px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#c6bf01" stroke="#c6bf01" stroke-width="1.26"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#f0e800" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682"></path> <path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z"></path>
                            <path d="m12.5 2.5.953 1"></path> </g> </g></svg>
                        </button>
                        {/* Delete */}
                        <button>
                          <svg className={`mx-${product.statusColor}`} width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f61e1e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <path d="M10 12V17" stroke="#f61e1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M14 12V17" stroke="#f61e1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4 7H20" stroke="#f61e1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#f61e1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#f61e1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <span className="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-orange-500 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-orange-500 font-semibold py-2 px-4 rounded-r">
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
