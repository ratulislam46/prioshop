import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Tomato from '@/public/assets/tomato.jpg'
import Fullcopy from '@/public/assets/fullcopy.jpg'
import Piyaj from '@/public/assets/piyaj.jpg'
import Puishak from '@/public/assets/puishak.jpg'
import Roson from '@/public/assets/roson.jpg'
import Moris from '@/public/assets/moris.jpg'
import Begun from '@/public/assets/begun.jpg'

const ProductMarquee = () => {
    return (
        <div>
            <Marquee>
                <div className='mr-10'>
                    <Image
                        src={Tomato}
                        height={200} width={200} alt='product'>
                    </Image>
                </div>
                <div className='mr-10'>
                    <Image
                        src={Fullcopy}
                        height={200} width={200} alt='product'>
                    </Image>
                </div>
                <div className='mr-10'>
                    <Image
                        src={Piyaj}
                        height={200} width={200} alt='product'>
                    </Image>
                </div>
                <div className='mr-10'>
                    <Image
                        src={Puishak}
                        height={200} width={200} alt='product'>
                    </Image>
                </div>
                <div className='mr-10'>
                    <Image
                        src={Moris}
                        height={200} width={200} alt='product'>
                    </Image>
                </div>
                <div className='mr-10'>
                    <Image
                        src={Roson}
                        height={200} width={200} alt='product'>
                    </Image>
                </div>
                <div className='mr-10'>
                    <Image
                        src={Begun}
                        height={200} width={200} alt='product'>
                    </Image>
                </div>

            </Marquee>
        </div>
    );
};

export default ProductMarquee;