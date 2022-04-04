import React from 'react';
import useReviews from '../../hooks/useReviews';
import Card from '../Card/Card';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container mx-auto p-5 my-5'>
            <h2 className='text-5xl font-semibold text-center'>Customer Reviews({reviews.length})</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-9'>
                {
                    reviews.map(review => <Card
                        key={review.id}
                        reviewDetails={review}></Card>)
                }
            </section>
        </div>
    );
};

export default Reviews;