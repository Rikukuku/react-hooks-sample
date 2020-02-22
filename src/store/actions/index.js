import { 
  CREATE_EVENT, 
  DELETE_EVENT, 
  DELETE_ALL_EVENTS,
  CREATE_OPERATION,
  DELETE_ALL_OPERATIONS
} from './actiontypes'

export const addEvent = (title, body) => ({
  type: CREATE_EVENT,
  title: title,
  body: body
})

export const deletEvent = (id) => ({
  type: DELETE_EVENT,
  id: id
})

export const deletAllEvents = () => ({
  type: DELETE_ALL_EVENTS
})

export const addOperation = (operation) => ({
  type: CREATE_OPERATION,
  log: operation,
  time: (new Date()).toISOString()
})

export const deleteAllOperations = () => ({
  type: DELETE_ALL_OPERATIONS,
})