import React, { useState } from 'react'
import { DELETE_ALL_EVENTS, addEvent } from '../store/actions'
import PropTypes from 'prop-types'

const EventForm = ({state, dispath}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const createEvent = e => {
    e.preventDefault()
    dispath(
      addEvent(title, body)
    )
    setTitle('')
    setBody('')
  }
  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除してもいいですか？')
    if (result) {
      dispath({
        type: DELETE_ALL_EVENTS
      })
    }
  }
  return (
  <React.Fragment>
    <div className='form-group'>
      <label　htmlFor="formEventTitle">Title</label>
      <input className="form-control" id="formEventTitle" value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div className='form-group'>
      <label　htmlFor="formEventBody">Body</label>
      <textarea className="form-control" id="formEventBody" value={body} onChange={(e) => setBody(e.target.value)}/>
    </div>
    <button className="btn btn-primary" onClick={createEvent} disabled={!(title  &&  body)}>イベントを作成する</button>
    <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length < 1}>イベントを全て削除する</button>
  </React.Fragment>
  )
}

EventForm.propTypes = {
  state: PropTypes.array,
  dispath: PropTypes.func
}
export default EventForm