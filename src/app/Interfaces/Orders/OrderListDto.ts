// Define the structure of a single order
export interface Order {
    id: string;
    userId?: string;
    remark?: string;
    status?: string;
    createdOn?: string;
  }
  
  // Define the structure of the API response
  export interface GetAllOrdersResponse {
    orders: Order[];
  }