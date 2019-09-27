import React, {useState, createContext} from 'react';
import {postEvent, updateEventURL, eventToRemoveURL} from '../../utils/fetchEvents.js';

export const EventContext = createContext();

export function EventProvider(props) {
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState('');
  const [eventToModify, setEventToModify] = useState(null);

  const addEvent = eventToAdd => {
    console.log('addEvent triggered');
    console.log('eventToAdd: ', eventToAdd);
    fetch(postEvent, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventToAdd),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(JSON.parse(data));
        setEvents([...events, JSON.parse(data)]);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const modifiedEventLoaded = async () => {
    const selectedEvent = await events.filter(event => event._id === eventId);
    setEventToModify(selectedEvent);
  };

  const updateEvent = ( eventToUpdate ) => {
    console.log('updateEvent triggered');
    console.log('eventToUpdate: ', eventToUpdate);
    fetch(updateEventURL + `${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventToUpdate),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("data: ", data.event)
        console.log(JSON.parse(data.event));
        const newEvents = events.filter(event => eventId !== event._id)
        setEvents([...newEvents, JSON.parse(data.event)]);
      })
      .catch(err => {
        console.error(err);
      });
  }

  const deleteEvent = (eventId) => {
    const eventsToKeep = events.filter(event => event._id !== eventId)
    console.log(eventsToKeep)
    console.log('deleteEventTriggered')
    console.log("id: ", eventId)
    fetch(eventToRemoveURL + `${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res)
        console.log(res.json())
        setEvents(eventsToKeep)
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        addEvent,
        eventId,
        setEventId,
        eventToModify,
        setEventToModify,
        modifiedEventLoaded,
        updateEvent,
        deleteEvent
      }}>
      {props.children}
    </EventContext.Provider>
  );
}
