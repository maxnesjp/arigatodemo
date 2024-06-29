import React from "react";

interface ProductDetailProps {
  productId: string;
}

const ProductDetailScreen = ({ params }: { params: { productId: string } }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Product ID: {params.productId}
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Product description goes here.
        </p>
        <p className="text-xl font-bold text-gray-700">$99.99</p>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
