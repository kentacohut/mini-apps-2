import React from 'react';

const Dates = ({startDate, endDate}) => {
  return (
    <div>
      <form>
        Start Date:
        <input type="date" name="start" value={startDate}/>
        End Date:
        <input type="date" name="end" value={endDate}/>
      </form>
    </div>
  )
}

export default Dates;