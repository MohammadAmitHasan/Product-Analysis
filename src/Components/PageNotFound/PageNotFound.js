import React from 'react';
import errorPicture from '../../img/404.webp'

const PageNotFound = () => {
    return (
        <div className='container mx-auto'>
            <img className='mx-auto' src={errorPicture} alt="404 error" />
            <h1 className='text-center text-3xl text-red-600 font-semibold'>Sorry.! Page Not Found</h1>
        </div>
    );
};

export default PageNotFound;