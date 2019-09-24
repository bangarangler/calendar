import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar)

class NowCalendar2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
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
          start: new Date(moment().add(2, 'days')),
          end: new Date(moment().add(2, "days", 1, "hours"))
        }
      ]
    }
  }
  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    })
  }

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start)
  }

  render() {
    return (
      <div>
        <DnDCalendar
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    )
  }
}

export default NowCalendar2;
