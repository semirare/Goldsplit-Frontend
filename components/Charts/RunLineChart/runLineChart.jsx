"use client"

import { useState } from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

const RunLineChart = ({ data }) => {
    const [showGolds, setShowGolds] = useState(true);
    const [showAverage, setShowAverage] = useState(true);

    const formatYAxis = (data) => {
        //converts ms to HH:mm and removes HH: if it is 00
        const format = data < 0 ? new Date(-data).toISOString() : new Date(data).toISOString();
        if (format.slice(11,13) === '00') {
            return format.slice(14, 19);
        }
        else {
            return format.slice(12, 19);
        }
    };

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={data}>
                    <Line type='monotone' dataKey='averageTotalTime' name='Averages' stroke="#FFFFFF" hide={!showAverage} isAnimationActive={false}/>
                    <Line type='monotone' dataKey='totalTime' name='PB' stroke='#50C878' isAnimationActive={false}/>
                    <Line type='monotone' dataKey='goldTotalTime' name='Golds' stroke='#FFD700' hide={!showGolds} isAnimationActive={false}/>
                    <CartesianGrid stroke='#CCC'/>
                    <Tooltip formatter={(y) => formatYAxis(y)} contentStyle={{backgroundColor: '#000000'}}/>
                    <Legend/>
                    <XAxis dataKey='name'/>
                    <YAxis tickFormatter={(y) => formatYAxis(y)} tick={{fontSize: 10}} 
                        tickCount={10}
                        domain={[0, 'datMax']}
                        interval='preserveStartEnd'
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RunLineChart;