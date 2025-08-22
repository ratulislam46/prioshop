import React from 'react';
import ProductCard from './components/ProductCard';

const getPost = async () => {
    const res = await fetch('http://localhost:3000/api/items');
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