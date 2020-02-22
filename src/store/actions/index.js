import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from './actiontypes'

export const addEvent = (title, body) => ({
  type: CREATE_EVENT,
  title: title,
  body: body
})

export const deletEvent = () => ({
  type: DELETE_EVENT
})

export const deletAllEvents = () => ({
  type: DELETE_ALL_EVENTS
})