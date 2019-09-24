import React, {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const eventObj = [
  {
    id: 0,
    title: "Test Title",
    allDay: false,
    start: new Date(),
    end: new Date(moment().add(1, "days")),
  },
  {
    id: 1,
    title: "All Day Event",
    allDay: true,
    start: new Date(moment().add(1, "days")),
    end: new Date(moment().add(1, "days"))
  },
  {
    id: 2,
    title: "Meeting with Bob",
    allDay: false,
    start: new Date(moment().add(2, "days")),
    end: new Date(moment().add(2, "days", 1, "hours"))
  }
]


const NowCalendar = props => {
  const [events, setEvents] = useState(eventObj);

  const onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start)
  }

  const onEventResize = (type, {event, start, end, allDay }) => {
    //events[0].start = start;
    //events[0].end = end;
  }
  return (
    <div>
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        startAccessor="start"
        endAccessor="end"
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        localizer={localizer}
        style={{height: "100vh"}}
      />
    </div>
  );
};

export default NowCalendar;
