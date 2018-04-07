import React from 'react';
import Square from './square';
import '../../styles/row.css';

const Row = ({ row })=>{
  return (
    <div className="Row">
      {row.map((square, index)=><Square key={index}/>)}
    </div>
  )
}

export default Row;