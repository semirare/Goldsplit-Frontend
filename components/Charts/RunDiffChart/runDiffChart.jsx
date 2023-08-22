"use client"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip, Legend } from "recharts";

const RunDiffChart = ({ data }) => {

    const formatYAxis = (data) => {
        //converts ms to HH:mm and removes HH: if it is 00 and adds '+' and '-' as needed
        const format = data < 0 ? new Date(-data).toISOString() : new Date(data).toISOString();
        if (format.slice(11,13) === '00') {
            return data < 0 ? '+' + format.slice(14, 19) : '-' + format.slice(14, 19);                
        }
        else {
            return data < 0 ? '+' + format.slice(12, 19) : '-' + format.slice(12, 19);                
        }
    };


    return (
        <div>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart data={data}>
                    <CartesianGrid stroke='#CCC'/>
                    <Line type='monotone' dataKey='cumulativeGoldTimeDiff' name='Golds' stroke="#FFD700" isAnimationActive={false}/>
                    <Line type='monotone' dataKey='cumulativeAverageTimeDiff' name='Averages' stroke='#FFFFFF' isAnimationActive={false}/> 
                    <ReferenceLine type='monotone' y={0} label={{position: 'top', value: 'PB'}} stroke='#50C878' isAnimationActive={false}/>
                    <Tooltip formatter={(y) => formatYAxis(y)} contentStyle={{backgroundColor: '#000000'}}/>
                    <Legend/>
                    <XAxis dataKey='name'/>
                    <YAxis tickFormatter={(y) => formatYAxis(y)} tick={{fontSize: 10}} reversed={true}
                        tickCount={10}
                        interval='preserveStartEnd'
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RunDiffChart;