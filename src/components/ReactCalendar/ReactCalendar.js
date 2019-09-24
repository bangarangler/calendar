import React, { useState } from 'react'
import Calendar from 'react-calendar'

const ReactCalendar = props => {
  const [date, setDate] = useState(new Date())

  const onChange = () => {
    console.log('change')
  }
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  )
}

export default ReactCalendar;
