import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import bannerImg from '../../img/banner-img.webp'
import Card from '../Card/Card';

const Home = () => {

    // Get the reviews from custom hook
    const [reviews, setReviews] = useReviews();

    // Get first 3 reviews to display
    const firstThreeReviews = reviews.slice(0, 3);

    return (
        <div className='container mx-auto md:mt-8 p-5'>

            {/* Home banner section */}
            <section className='grid grid-cols-1 lg:grid-cols-5 gap-4'>

                {/* Containing the texts */}
                <div className='lg:col-span-3 p-6 flex items-center order-2 lg:order-1'>
                    <div>
                        <h1 className='text-4xl md:text-5xl text-violet-700 font-semibold'>The Laptop For You</h1>
                        <h3 className='text-3xl md:text-4xl my-6 font-semibold'>On Your Budget</h3>
                        <p className='leading-7 text-slate-700 text-lg'>
                            Laptop is one of the most important and useful devices nowadays. <br />
                            MSI Modern 15 A5M AMD Ryzen 5 5500U 15.6 Inch FHD IPS Display Carbon Gray Laptop is a perfect choice for him, who is looking for a mid range laptop having good configurations with stunning design within the price of bdt 65,000.
                        </p>

                        <button className='text-violet-700 bg-violet-100 px-5 py-3 rounded-lg  mt-6 hover:bg-violet-200 flex items-center text-lg'>Explore
                            <span><ArrowCircleRightIcon className='w-5 h-5 ml-1'></ArrowCircleRightIcon></span>
                        </button>
                    </div>
                </div>

                {/* Containing the image */}
                <div className='lg:col-span-2 order-1 lg:order-2 flex justify-center'>
                    <div>
                        <img src={bannerImg} alt="MSI Modern 15 A5M AMD Ryzen 5 5500U 15.6 Inch FHD IPS Display Carbon Gray Laptop" />
                    </div>
                </div>
            </section>

            {/* Review section */}
            <section className='my-10 text-center'>
                <h2 className='text-3xl md:text-4xl font-semibold text-center'>Customer Reviews({reviews.length})</h2>

                {/* Displaying reviews */}
                <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left gap-5'>
                    {
                        firstThreeReviews.map(review => <Card
                            key={review.id}
                            reviewDetails={review}></Card>)
                    }
                </div>

                <Link className='rounded-lg py-2 px-10 bg-violet-700 text-white' to={'/reviews'}>See All Reviews</Link>
            </section>
        </div>
    );
};

export default Home;