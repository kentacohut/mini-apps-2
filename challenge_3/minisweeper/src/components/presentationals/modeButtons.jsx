import React from 'react';

const ModeButtons = ({dispatchAction}) => {
  return (
    <div>
      <button type="button" name="EASY" onClick={(e)=>{dispatchAction(e.target.name)}}>Easy</button>
    </div>
  )
}

export default ModeButtons;