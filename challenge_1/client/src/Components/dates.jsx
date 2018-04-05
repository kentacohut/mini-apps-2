import React from 'react';

const Dates = ({startDate, endDate, handleSubmit, max}) => {
  return (
    <div>
      <form onChange={(e)=>{handleSubmit(e, e.target.value)}}>
        Start Date:
        <input type="date" name="start" min="2010-7-17" value={startDate}/>
        End Date:
        <input type="date" name="end" max={ max } value={endDate}/>
      </form>
    </div>
  )
}

export default Dates;