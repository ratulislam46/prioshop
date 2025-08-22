'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-[400px]">
            {/* Image Section */}
            <div className="w-full h-[200px] relative">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow mt-4">
                <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
                    {product.description}
                </p>
                <p className="text-xl font-bold mt-2">${product.price}</p>
            </div>

            {/* Button Section */}
            <Link href={`products/${product._id}`} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                Details
            </Link>
        </div>
    );
};

export default ProductCard;