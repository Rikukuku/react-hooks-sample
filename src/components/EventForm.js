import React, { useState, useContext } from 'react'
import { addEvent, deletAllEvents, addOperation, deleteAllOperations } from '../store/actions'
import AppContex from '../context/AppContext'

const EventForm =  () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const {state, dispatch} = useContext(AppContex)

  const createEvent = e => {
    e.preventDefault()
    dispatch(
      addEvent(title, body)
    )
    dispatch(addOperation('イベント作成'))
    setTitle('')
    setBody('')
  }
  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除してもいいですか？')
    if (result) {
      dispatch(deletAllEvents())
      dispatch(addOperation('イベント全削除'))
    }
  }
  const deleteAllLogs = e => {
    e.preventDefault()
    dispatch(deleteAllOperations())
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
    <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length < 1}>イベントを全て削除する</button> 
    <button className="btn btn-danger" onClick={deleteAllLogs} disabled={state.operationLogs < 1}>操作ログを削除する</button>
  </React.Fragment>
  )
}

export default EventForm