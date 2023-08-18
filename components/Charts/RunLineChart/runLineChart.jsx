"use client"

import { useState } from "react";

import * as Toggle from '@radix-ui/react-navigation-menu';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

const RunLineChart = ({ data }) => {
    const [mode, setMode] = useState('goldTotalTime');

    const formatYAxis = (data) => {
        //converts seconds to HH:mm and removes HH: if it is 00
        const format = new Date(data * 1000).toISOString();
        if (format.slice(11,13) === '00') {
            return format.slice(14, 19);
        }
        else {
            return format.slice(12, 19);
        }
    }

    const onModeClick = () => {
        if (mode === 'goldTotalTime') {
            setMode('averageTotalTime');
        }
        else {
            setMode('goldTotalTime');
        };
    }

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={data}>
                    <Line type='monotone' dataKey='totalTime' stroke='#50C878'/>
                    <Line type='monotone' dataKey={mode} stroke='#FFD700'/>
                    <CartesianGrid stroke='#CCC'/>
                    <XAxis dataKey='name'/>
                    <YAxis tickFormatter={(y) => formatYAxis(y)} tick={{fontSize: 10}}/>
                </LineChart>
            </ResponsiveContainer>
        <button className='text-yellow-500 border border-yellow-500' onClick={onModeClick}>
            {mode === 'goldTotalTime' ? 'Golds' : 'Average'}
        </button>
        </div>
    );
};

export default RunLineChart;