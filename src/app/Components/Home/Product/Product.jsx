
import ProductCard from '@/src/app/products/components/ProductCard';
import React from 'react';

export const dynamic = "force-dynamic";

const getPost = async () => {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/items`);
    const data = await res.json();
    return data;
}

const Product = async () => {
    const allProducts = await getPost();

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-semibold mb-12'>Product Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {allProducts.map((product) => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Product;