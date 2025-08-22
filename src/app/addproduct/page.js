'use client'
import React from 'react';

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        
    }

    return (
        <div className='container mx-auto'>
            <section className='flex justify-center items-center'>
                <form onSubmit={handleAddProduct}
                    className='p-4 border border-gray-300 rounded-xl my-24 shadow-xl hover:shadow-2xl'
                >
                    <legend className="fieldset-legend text-black ">What is your product name?</legend>
                    <input type="text" name='name' className="input bg-white" placeholder="Product Name" required />

                    <legend className="fieldset-legend text-black ">Product image</legend>
                    <input type="file" name='image' className="input bg-white pt-2 course-pointer" placeholder="Product Name" required />

                    <legend className="fieldset-legend text-black ">Product price</legend>
                    <input type="number" name='price' className="input bg-white" placeholder="Product Name" min={1} required />

                    <legend className="fieldset-legend text-black ">Product Quantity</legend>
                    <input type="number" name='quantity' className="input bg-white" placeholder="Product Quantity" min={1} required />

                    <legend className="fieldset-legend text-black ">Product Description</legend>
                    <input type="text" name='description' className="input bg-white" placeholder="Description" required /><br /><br />

                    <button type='submit' className='btn w-full'>Add Product</button>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;