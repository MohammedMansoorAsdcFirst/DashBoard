import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 1000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 2490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 2490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 4490,
        pv: 4300,
        amt: 2100,
    },
];



const ExampleFunctionComponentTwo = () => {
    // console.log('Rendering ExampleFunctionComponent');
    return (
        <ResponsiveContainer width={250} height={80}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <Area type="monotone" dataKey="uv" stroke="#E0B956" fill="#fff" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ExampleFunctionComponentTwo;
