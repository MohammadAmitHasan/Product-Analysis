import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='p-5'>
                <h3 className='text-center text-2xl mb-5 text-violet-700 font-semibold'>Month Wise Sale</h3>
                <MyLineChart></MyLineChart>
            </div>

            <div className='p-5'>
                <h3 className='text-center text-2xl mb-5 text-violet-700 font-semibold'>Investment Vs Revenue</h3>
                <MyAreaChart></MyAreaChart>
            </div>

            <div className='p-5'>
                <h3 className='text-center text-2xl mb-5 text-violet-700 font-semibold'>Investment Vs Revenue</h3>
                <MyBarChart></MyBarChart>
            </div>
        </div>
    );
};

export default Dashboard;