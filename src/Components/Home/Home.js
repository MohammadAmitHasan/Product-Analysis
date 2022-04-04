import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import bannerImg from '../../img/banner-img.webp'

const Home = () => {
    return (
        <div className='container mx-auto mt-8'>

            {/* Home banner section */}
            <section className='grid grid-cols-5'>

                {/* Containing the texts */}
                <div className='col-span-3 p-6 flex items-center'>
                    <div>
                        <h1 className='text-5xl my-4 text-violet-700 font-semibold'>The Laptop For You</h1>
                        <h3 className='text-4xl mb-5'>On Your Budget with powerful specs</h3>
                        <p className='leading-6 text-slate-700'>
                            Laptop is one of the most important and useful devices nowadays. <br />
                            MSI Modern 15 A5M AMD Ryzen 5 5500U 15.6 Inch FHD IPS Display Carbon Gray Laptop is a perfect choice for him, who is looking for a mid range laptop having good configurations with stunning design within the price of bdt 65,000.
                        </p>

                        <button className='text-violet-700 bg-violet-100 px-5 py-3 rounded-lg  mt-5 hover:bg-violet-200 flex items-center'>Explore
                            <span><ArrowCircleRightIcon className='w-5 h-5 ml-1'></ArrowCircleRightIcon></span>
                        </button>
                    </div>
                </div>

                {/* Containing the image */}
                <div className='col-span-2'>
                    <img src={bannerImg} alt="MSI Modern 15 A5M AMD Ryzen 5 5500U 15.6 Inch FHD IPS Display Carbon Gray Laptop" />
                </div>
            </section>
        </div>
    );
};

export default Home;