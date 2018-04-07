import React from 'react';
import Row from './row';

const Board = ({ board }) => {
  return (
    <div>
      {board.map((row, index)=><Row key={index} row={row}/>)}
    </div>
  )
}

export default Board;