
import React from 'react';
import ProductCard from './components/ProductCard';

export const dynamic = "force-dynamic";

const getPost = async () => {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/items`);

    if (!res.ok) {
        console.error("Failed to fetch products:", res.status, await res.text());
        return [];
    }

    const data = await res.json();
    return data;
}

const Products = async () => {

    const allProducts = await getPost();

    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {allProducts.map((product) => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Products; <h1>Products Page</h1>