import React from 'react';

const Products = async () => {

    const res = await fetch('http://localhost:3000/api/items');
    const data = await res.json()

    return (
        <div>
            <h1>Products Page</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Products; <h1>Products Page</h1>