import React, {useState, useEffect} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './NowCalendar.css';
import { fetchData, getEvents } from '../../utils/fetchEvents.js'

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

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
];

const NowCalendar = props => {
  const [events, setEvents] = useState(eventObj);
  const [selectedDate, setSelectedDate] = useState(null)
  //const run = async () => {
    //setEvents(await fetchData(getEvents))
  //}

  //useEffect(() => {
    //run()
  //}, [])

  const onEventDrop = ({event, start, end, allDay}) => {
    console.log(start);
  };

  const onEventResize = (type, {event, start, end, allDay}) => {
    //events[0].start = start;
    //events[0].end = end;
  };
  return (
    <div>
      {events && <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        startAccessor="start"
        endAccessor="end"
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        selectable
        date={selectedDate}
        onNavigate={date => setSelectedDate(date)}
        localizer={localizer}
        style={{
          height: '95vh',
          width: '90%',
          margin: '1.5% auto',
        }}
      />}
    </div>
  );
};

export default NowCalendar;
