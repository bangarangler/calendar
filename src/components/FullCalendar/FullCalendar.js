import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid"
import { fetchData, getEvents } from '../../utils/fetchEvents.js'
import moment from 'moment';

import './main.scss'

const Cal = props => {
  const eventObj = [
    {
      id: 0,
      title: 'Test Title',
      allDay: false,
      start: new Date(),
      end: new Date(moment().add(1, 'days')),
    },
    {
      id: 1,
      title: 'All Day Event',
      allDay: true,
      start: new Date(moment().add(1, 'days')),
      end: new Date(moment().add(1, 'days')),
    },
    {
      id: 2,
      title: 'Meeting with Bob',
      allDay: false,
      start: new Date(moment().add(2, 'days')),
      end: new Date(moment().add(2, 'days', 1, 'hours')),
    },
    {
      id: 3,
      title: 'Video chat with Molly',
      allDay: false,
      start: new Date(),
      end: new Date(moment().add(3, 'hours'))
    },
    {
      id: 4,
      title: 'Put it here',
      allDay: false,
      start: new Date(moment().subtract(6, 'days')),
      end: new Date(moment().subtract(6, 'days'))
    },
  ]
  const [events, setEvents] = useState(eventObj)
  //const run = async () => {
    //setEvents(await fetchData(getEvents))
  //}

  //useEffect(() => {
    //run()
  //}, [])
  return (
    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
    events={events}
    />
  )
}

export default Cal;
