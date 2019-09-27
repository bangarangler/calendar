import React, { useState, createContext } from 'react'
import { postEvent } from '../../utils/fetchEvents.js'

export const EventContext = createContext()

export function EventProvider(props) {
  const [events, setEvents] = useState([])
  const [eventId, setEventId] = useState("")
  const [eventToModify, setEventToModify] = useState(null)

  const addEvent = (eventToAdd) => {
    console.log('addEvent triggered')
    console.log('eventToAdd: ', eventToAdd);
    fetch(postEvent, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventToAdd)
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(JSON.parse(data))
      setEvents([...events, JSON.parse(data)])
    }).catch(err => {
      console.error(err)
    })
  }

  const modifiedEventLoaded = async () => {
    const selectedEvent = await events.filter(event => event._id === eventId)
    setEventToModify(selectedEvent)
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
        modifiedEventLoaded
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}
