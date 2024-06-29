import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Image from "next/image";
const ProductsScreen = () => {
  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-gray-500"
        />
      </div>

      {/* List of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5].map((productId) => (
          <div key={productId} className="bg-gray-800 p-4 rounded-md">
            <Link href={`/products/${productId}`}>
              <Image
                src={`https://via.placeholder.com/300x200?text=Product+${productId}`}
                alt={`Product ${productId}`}
                width={50}
                height={50}
                className="rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold text-white">
                Product {productId}
              </h3>
              <p className="text-gray-400">
                Description of Product {productId}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;
