import React from 'react';
import { Product } from '@/app/Interfaces/ProductList/ProductListDto';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log("--->Image", product);
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
      <img
        className="w-full"
        src={product.productLogo} // Use the actual image URL or pass it via product
        alt={product.productName}
      />
      <div className="px-2 py-2">
        <div className="font-bold text-lg mb-2 text-center">
          {product.productName}
        </div>
        <p className="text-center text-gray-700 text-base">
          Version: {product.version}
        </p>
        <p className="text-center text-gray-700 text-base">
          Price: ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
