import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const MyPieChart = () => {
    const sellData = [
        { name: 'Mar', value: 241 },
        { name: 'Apr', value: 423 },
        { name: 'May', value: 726 },
        { name: 'Jun', value: 529 },
        { name: 'Jul', value: 601 },
        { name: 'Aug', value: 670 },
    ]
    return (
        <div className='w-full h-80'>
            <ResponsiveContainer>
                <PieChart>
                    <Tooltip />
                    <Pie data={sellData} dataKey="value" cx="50%" cy="50%" outerRadius={120} label fill="#8884d8" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyPieChart;