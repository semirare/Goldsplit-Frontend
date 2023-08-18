"use client"

import { useState } from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

const RunLineChart = ({ data }) => {
    const [mode, setMode] = useState('goldTotalTime');
    const [showGolds, setShowGolds] = useState(true);
    const [showAverage, setShowAverage] = useState(true);

    const formatYAxis = (data) => {
        //converts ms to HH:mm and removes HH: if it is 00
        const format = new Date(data).toISOString();
        if (format.slice(11,13) === '00') {
            return format.slice(14, 19);
        }
        else {
            return format.slice(12, 19);
        }
    }

    const handleGoldsClick = () => {
        setShowGolds(!showGolds);
    };

    const handleAverageClick = () => {
        setShowAverage(!showAverage);
    };

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={data}>
                    <Line type='monotone' dataKey='totalTime' stroke='#50C878'/>
                    <Line type='monotone' dataKey='averageTotalTime' stroke="#FFFFFF" hide={!showAverage}/>
                    <Line type='monotone' dataKey='goldTotalTime' stroke='#FFD700' hide={!showGolds}/>
                    <CartesianGrid stroke='#CCC'/>
                    <XAxis dataKey='name'/>
                    <YAxis tickFormatter={(y) => formatYAxis(y)} tick={{fontSize: 10}}/>
                </LineChart>
            </ResponsiveContainer>
            <button 
                className="text-white border border-white p-2"
                onClick={handleGoldsClick}
            >
                Toggle Golds
            </button>
            <button 
                className="text-white border border-white p-2"
                onClick={handleAverageClick}
            >
                Toggle Average
            </button>
        </div>
    );
};

export default RunLineChart;