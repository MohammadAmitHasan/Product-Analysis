import React from 'react';

const Card = ({ reviewDetails }) => {
    const { id, name, review, rating } = reviewDetails;
    return (
        <div className='border-2 p-5 rounded-lg shadow-lg'>
            <h4 className='text-xl font-semibold mb-4'>Name: <span className='text-violet-800'>{name}</span></h4>
            <p className='mb-3 leading-7 '>{review}</p>
            <p>Rating: <span className='text-yellow-600 font-semibold'>{rating}</span></p>
        </div>
    );
};

export default Card;