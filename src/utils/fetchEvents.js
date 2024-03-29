export const getEvents = `http://localhost:8080/events`
export const postEvent = `http://localhost:8080/event`
export const updateEventURL = `http://localhost:8080/update/`
export const eventToRemoveURL = `http://localhost:8080/delete/`

export const fetchData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  return data
};
