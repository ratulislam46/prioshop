import Image from 'next/image';
import React from 'react';

export const dynamic = "force-dynamic";

const getSingleProduct = async (product_id) => {
    const res = fetch(`http://localhost:3000/api/items/${product_id}`);
    const data = (await res).json();
    return data;
}

const ProductDetails = async ({ params }) => {
    const id = await params;
    const singleProduct = await getSingleProduct(id.id);
    // console.log(singleProduct);

    const { title, description, price, product_owner, quantity, image } = singleProduct

    return (
        <div className='container mx-auto shadow-md p-12 rounded-md'>
            <div className='md:flex gap-5 justify-center md:justify-between items-center'>
                <div>
                    <Image
                        src={image}
                        alt={title}
                        height={400}
                        width={400}
                        className="object-cover rounded-md"
                    />
                </div>
                {/* Content Section */}
                <div className="mt-12 md:mt-0 space-y-5">
                    <h2 className="text-5xl font-semibold ">{title}</h2>
                    <p className="text-gray-600 text-xl">
                        {description}
                    </p>
                    <p className='text-xl font-semibold'>Quantity: <span>{quantity}</span></p>
                    <p className="text-xl font-semibold">Price: <span className='text-green-500 font-bold'>${price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;