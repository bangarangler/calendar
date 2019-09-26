import React, { useState, createContext } from 'react'

export const EventContext = createContext()

export function EventProvider(props) {
  const [events, setEvents] = useState([])

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}
