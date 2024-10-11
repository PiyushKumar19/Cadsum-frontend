'use client'

import { Order } from "@/app/Interfaces/Orders/OrderListDto";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const OrderList = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `https://localhost:7214/api/Admin/get-allOrders?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setOrders(data.orders);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [pageNumber, pageSize]);

  const handleUpdateStatus = async (orderId: string, status: string) => {
    try {
      const response = await fetch(
        `https://localhost:7214/api/Admin/update-orderStatus`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: orderId,
            status: status
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log('Order status update successful:', result);
        fetchOrders();
      } else {
        console.error('Order status update failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during status update:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Orders</h2>
          <span className="text-xs">All Orders</span>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                {["Ordered Product", "Status", "Created On", "Actions"].map(
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
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.remark}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {order.status}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {formatDate(order.createdOn ?? "")}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-2-900 leading-tight">
                      <span aria-hidden className="flex inset-0 opacity-50 rounded-full">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="p-0 h-auto">
                              <svg
                                width="28px"
                                height="28px"
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#050000"
                                stroke="#050000"
                                strokeWidth="0.14"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                  <g fillRule="evenodd">
                                    <g fillRule="nonzero">
                                      <path d="M0 7a7 7 0 1114 0A7 7 0 010 7z"></path>
                                      <path
                                        fill="#fff"
                                        d="M13 7A6 6 0 101 7a6 6 0 0012 0z"
                                        style={{ fill: 'var(--svg-status-bg, #fff)' }}
                                      ></path>
                                    </g>
                                    <circle cx="7" cy="7" r="1"></circle>
                                    <circle cx="10" cy="7" r="1"></circle>
                                    <circle cx="4" cy="7" r="1"></circle>
                                  </g>
                                </g>
                              </svg>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem className="text-green-500" onSelect={() => handleUpdateStatus(order.id, "Approved")}>
                              Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-green-700" onSelect={() => handleUpdateStatus(order.id, "Completed")}>
                              Complete
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500" onSelect={() => handleUpdateStatus(order.id, "Rejected")}>
                              Reject
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-orange-500 font-semibold py-2 px-4 rounded-l"
                onClick={() => setPageNumber(pageNumber - 1)}>
                Prev
              </button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-orange-600 bg-orange-500 font-semibold py-2 px-4 rounded-r"
                onClick={() => setPageNumber(pageNumber + 1)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;