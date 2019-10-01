import React, {useState, useEffect, useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {fetchData, getEvents} from '../../utils/fetchEvents.js';
import moment from 'moment';
import {SpinnerContext, EventContext} from '../../context/allContexts';

import SpringModal from '../Modal/Modal.js';
import AddEvent from '../AddEvent/AddEvent.js'
import UpdateEvent from '../UpdateEvent/UpdateEvent.js'

import './main.scss';

const Cal = props => {
  const {events, setEvents, setEventId, deleteEvent, currentDayStart, setCurrentDayStart, currentDayEnd, setCurrentDayEnd } = useContext(EventContext);
  const {Loader} = useContext(SpinnerContext);
  const [open, setOpen] = React.useState(false);
  const [viewModal, setViewModal] = React.useState(false)

  const handleOpen = () => {
    setOpen(true);
    setViewModal(true)
  };

  const handleClose = () => {
    setOpen(false);
    setViewModal(false)
  };
  const run = async () => {
    setEvents(await fetchData(getEvents));
  };

  useEffect(() => {
    run();
  }, []);

  const handleDateClick = arg => {
    console.log(arg);
    //setInfo(arg)
    console.log(arg.dateStr)
    console.log(new Date(moment("2019-09-30T10:30:00")))
    setOpen(true);
  };

  const handleSelect = (info) => {
    console.log('handleEventClickInfo runnin...')
    //console.log('event: ', info.view.title)
    //console.log(moment(new Date(info.startStr).toISOString()).format('LT'))
    console.log(moment(info.startStr).add(8, 'hours').format())
    //setCurrentDayStart(moment(new Date(info.startStr).toISOString()))
    setCurrentDayStart(moment(info.startStr).add(8, 'hours').format())
    setCurrentDayEnd(moment(info.endStr).subtract(4, 'hours').format())
  }

  const handleEventClick = (info) => {
    console.log("info: ", info.event._instance.range.start)
    setEventId(info.event._def.extendedProps._id)
    setCurrentDayStart(info.event._instance.range.start)
    setCurrentDayEnd(info.event._instance.range.end)
    setViewModal(true)
  }

  const display = () => {
    let trigger;
    if (viewModal) {
      trigger = viewModal
    } else if (open) {
      trigger = open
    } else {
      trigger = open
    }
    return (<SpringModal
      open={trigger}
      setOpen={setOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      {viewModal && <UpdateEvent handleClose={handleClose} />}
      {open && <AddEvent handleClose={handleClose} />}
    </SpringModal>
    )}

  useEffect(() => {
    display()
  }, [open, viewModal])


  return (
    <>
      {events.length >= 0 ? (
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          select={handleSelect}
          eventClick={handleEventClick}
          selectable="true"
          axisFormat="H:mm"
          slotDuration="00:30:00"
          snapDuration="00:30:00"
          scrollTime="06:00:00"
          minTime="00:00:00"
          maxTime="24:00:00"
          //unselectAuto="true"
          events={events}
          eventBackgroundColor="#13348b"
          eventColor="#13348b"
          eventBorderColor="white"
          eventTextColor="#eee"
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short',
          }}
          navLinks="true"
          editabel="true"
          droppable="true"
          header={{
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
        />
      ) : (
        Loader()
      )}
      {display()}
    </>
  );
};

export default Cal;
