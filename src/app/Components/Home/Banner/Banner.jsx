import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="relative h-[600px] md:[700px] lg:h-[800px]">
                <img
                    src="https://i.postimg.cc/4dDGgHNf/banner.jpg"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt="banner image"
                />
                  <div className="absolute inset-0 bg-black/40" />
                <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
                    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full mb-12">
                                <h2 className="mb-6 mt-24 font-sans text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center lg:text-start">
                                    Browse products, explore details – all in one place with <span className='text-orange-500 border-b-4'>Prio-Shop</span>.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;