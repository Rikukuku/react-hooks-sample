export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const DELETE_ALL_EVENTS = 'DELETE_ALL_EVENTS'


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