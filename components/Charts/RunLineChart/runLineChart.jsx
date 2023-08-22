"use client"

import { useState } from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip } from "recharts";

const RunLineChart = ({ data }) => {
    const [diffMode, setDiffMode] = useState(false);
    const [showGolds, setShowGolds] = useState(true);
    const [showAverage, setShowAverage] = useState(true);

    const formatYAxis = (data) => {
        //converts ms to HH:mm and removes HH: if it is 00
        //also adds a '+' and '-' when in diff mode
        const format = data < 0 ? new Date(-data).toISOString() : new Date(data).toISOString();
        if (format.slice(11,13) === '00') {
            if (diffMode) {
                return data < 0 ? '+' + format.slice(14, 19) : '-' + format.slice(14, 19);                
            }
            else {
                return format.slice(14, 19);
            }
        }
        else {
            if (diffMode) {
                return data < 0 ? '+' + format.slice(12, 19) : '-' + format.slice(12, 19);                
            }
            else {
                return format.slice(12, 19);
            }
        }
    };

    const handleGoldsClick = () => {
        setShowGolds(!showGolds);
    };

    const handleAverageClick = () => {
        setShowAverage(!showAverage);
    };

    const handleModeClick = () => {
        setDiffMode(!diffMode);
    }

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={data}>
                    <Line type='monotone' dataKey='totalTime' stroke='#50C878' hide={diffMode}/>
                    <Line type='monotone' dataKey='averageTotalTime' stroke="#FFFFFF" hide={!showAverage || diffMode}/>
                    <Line type='monotone' dataKey='goldTotalTime' stroke='#FFD700' hide={!showGolds || diffMode}/>
                    <Line type='monotone' dataKey='cumulativeGoldTimeDiff' stroke="#FFD700" hide={!diffMode}/>
                    <Line type='monotone' dataKey='cumulativeAverageTimeDiff' stroke='#FFFFFF' hide={!diffMode}/> 
                    <ReferenceLine type='monotone' y={0} label='PB' stroke='#50C878' hide={!diffMode}/>
                    <CartesianGrid stroke='#CCC'/>
                    <Tooltip formatter={(y) => formatYAxis(y)}/>
                    <XAxis dataKey='name'/>
                    <YAxis tickFormatter={(y) => formatYAxis(y)} tick={{fontSize: 10}} reversed={diffMode} 
                        tickCount={10}
                        interval='preserveStartEnd'
                    />
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
            <button 
                className="text-white border border-white p-2"
                onClick={handleModeClick}
            >
                Toggle Diff Mode
            </button>
        </div>
    );
};

export default RunLineChart;