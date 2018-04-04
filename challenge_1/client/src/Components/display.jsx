import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const Chart = ({chartData}) => {
  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title:{
            display:true,
            text:'Most Popular Colors',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
}


export default Chart;