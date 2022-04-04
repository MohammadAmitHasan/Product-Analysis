import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div className='border-2 shadow-lg rounded-lg p-5'>
            <h4>{question}</h4>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;