// Define the structure of a single product
export interface Product {
    id: string;
    productName: string;
    productLogo: string;
    price: number;
    version: string;
  }
  
  // Define the structure of the API response
  export interface GetAllProductsResponse {
    products: Product[];
  }
  