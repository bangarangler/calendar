import React, {useState, useEffect, useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {fetchData, getEvents} from '../../utils/fetchEvents.js';
import moment from 'moment';
import {SpinnerContext, EventContext} from '../../context/allContexts';

import SpringModal from '../Modal/Modal.js';

import './main.scss';

const Cal = props => {
  const {events, setEvents} = useContext(EventContext);
  const {Loader} = useContext(SpinnerContext);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const run = async () => {
    setEvents(await fetchData(getEvents));
  };

  useEffect(() => {
    run();
  }, []);

  const handleDateClick = arg => {
    console.log(arg);
    setOpen(true);
  };

  return (
    <>
      {events.length > 0 ? (
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          selectable="true"
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
          header={{
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
        />
      ) : (
        Loader()
      )}
      {open && (
        <SpringModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default Cal;
