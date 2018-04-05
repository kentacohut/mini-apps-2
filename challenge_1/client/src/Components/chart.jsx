import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const Chart = ({chartData}) => {
  return (
    <div className="chart">
      <Line
        data={chartData}
        width={100}
        height={40}
        options={{
          title:{
            display:true,
            text:'Closing Values Of Bitcon In USD',
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