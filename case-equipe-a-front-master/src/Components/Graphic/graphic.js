import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function Graphic(){

  const dataGreen = [
    {
      name: '', uv: 500, pv: 250, amt: 2400,
    },
    {
      name: '30/08', uv: 200, pv: 1398, amt: 2210,
    },
    {
      name: '30/08', uv: 900, pv: 9800, amt: 2290,
    },
    {
      name: '30/08', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: '30/08', uv: 800, pv: 1398, amt: 2210,
    },
    {
      name: '30/08', uv: 2000, pv: 9800, amt: 2290,
    },

  ];

  return(
    <>
    <LineChart width={600} height={300} data={dataGreen}>
      <Line type="monotone" dataKey="uv" stroke="#38d609" />
      <Line  type="monotone" dataKey="pv" stroke="#097932" />
      <CartesianGrid stroke="#dcf6e4" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>

    </>
  )

}
export default Graphic;
