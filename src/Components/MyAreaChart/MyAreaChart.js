import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyAreaChart = () => {
    const [chartData, setChartData] = useChartData([]);
    return (
        <div className='w-full h-80'>
            <ResponsiveContainer>
                <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" strokeWidth={2} />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
};

export default MyAreaChart;