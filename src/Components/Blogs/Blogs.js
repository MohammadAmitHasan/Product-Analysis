import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-10 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {/* First Question answer */}
            <div className='border-2 shadow-lg rounded-lg p-5'>
                <h4 className='text-xl mb-5 font-semibold'>What is context API and what is the purpose of using it.?</h4>
                <p className='leading-7'>
                    Context API is a system of react to pass data through the component tree without props drilling. <br />
                    In a typical react application we have to pass data from a parent component to a child component using props but when the component tree is large and the data is to be shared to a lot of files it becomes difficult. Example: Sharing local preference, UI theme, current authenticated user etc. <br />
                    Using react context API we can share files very easily in the component tree.
                </p>
            </div>

            {/* Second question answer */}
            <div className='border-2 shadow-lg rounded-lg p-5'>
                <h4 className='text-xl mb-5 font-semibold'>What are semantic tags.?</h4>
                <p className='leading-7'>
                    The tags which clearly describe the meaning of itself to both browser and the developer are called semantic tags.<br />
                    For example: {`<article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time>`} etc.<br /><br />
                    Using these tags provide information about the content of these tags which becomes easy to understand for the browser. So using these tags improves search engine optimization. That is why using semantic tags is very important.
                </p>
            </div>

            {/* Third Question answer */}
            <div className='border-2 shadow-lg rounded-lg p-5'>
                <h4 className='text-xl mb-5 font-semibold'>Inline vs Block vs Inline Block</h4>
                <p className='leading-7'>
                    1. Both Inline and inline block elements start where the previous element ended but block elements start in a new line. <br />
                    2. Both Inline and inline block elements occupy just the width required by the content inside but block elements occupy the full width available. <br />
                    3. We cannot set height, width of inline elements but we can set height and width of both inline block and block elements. <br />
                    4. We cannot set margin top and bottom in case of inline elements but we can set margin top and bottom in case of both block and inline block elements.
                </p>
            </div>
        </div>
    );
};

export default Blogs;