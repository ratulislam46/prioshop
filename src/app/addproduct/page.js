'use client'
import React from 'react';

const AddProduct = () => {

    const handleAddProduct = () =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const describtion= form.name.value;
    }
    
    return (
        <div className='container mx-auto'>
            <section className='flex justify-center items-center'>
                <form onSubmit={handleAddProduct}
                className='p-4 border border-gray-300 rounded-xl my-24'
                >
                    <legend className="fieldset-legend text-black ">What is your product name?</legend>
                    <input type="text" className="input bg-white" placeholder="Product Name" required />
                    <legend className="fieldset-legend text-black ">What is your product price?</legend>
                    <input type="text" className="input bg-white" placeholder="Product Price" required />
                    <legend className="fieldset-legend text-black ">Product image</legend>
                    <input type="file" className="input bg-white pt-2 course-pointer" placeholder="Product Name" required />
                    <legend className="fieldset-legend text-black ">Product price</legend>
                    <input type="number" className="input bg-white" placeholder="Product Name" min={10} required />
                    <legend className="fieldset-legend text-black ">Product Description</legend>
                    <input type="text" className="input bg-white" placeholder="Description" required /><br/><br/>
                    <input value='Add Product' className='btn w-full'></input>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;