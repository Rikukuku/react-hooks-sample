import React from 'react'
import { DELETE_EVENT } from '../store/actions/actiontypes'

const Event = ({ dispath, event}) => {
  const handleDeleteButton = () => {
    const result = window.confirm(`[Title:${event.title}]を削除してもいいですか？`)
    if (result) {
      dispath({
        type: DELETE_EVENT,
        id: event.id
      })
    }
  }
  return (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event