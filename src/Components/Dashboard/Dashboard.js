import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const Dashboard = () => {
    return (
        <div className='container mx-auto my-5 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10'>

            {/* Line Chart showing month wise sell data */}
            <div className='p-5'>
                <h3 className='text-center text-2xl mb-5 text-violet-700 font-semibold'>Month Wise Sale</h3>
                <MyLineChart></MyLineChart>
            </div>

            {/* Pie Chart showing month wise sell data */}
            <div className='p-5'>
                <h3 className='text-center text-2xl mb-5 text-violet-700 font-semibold'>Month Wise Sale</h3>
                <MyPieChart></MyPieChart>
            </div>

            {/* Area chart showing Investment Vs Revenue data */}
            <div className='p-5'>
                <h3 className='text-center text-2xl mb-5 text-violet-700 font-semibold'>Investment Vs Revenue</h3>
                <MyAreaChart></MyAreaChart>
            </div>

            {/* Bar chart showing Investment Vs Revenue data */}
            <div className='p-5'>
                <h3 className='text-center text-2xl mb-5 text-violet-700 font-semibold'>Investment Vs Revenue</h3>
                <MyBarChart></MyBarChart>
            </div>


        </div>
    );
};

export default Dashboard;