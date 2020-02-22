import React, { useContext } from 'react'
import { deletEvent, addOperation } from '../store/actions'
import AppContext from '../context/AppContext'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const handleDeleteButton = () => {
    const result = window.confirm(`[Title:${event.title}]を削除してもいいですか？`)
    if (result) {
      dispatch(deletEvent(event.id))
      dispatch(addOperation(`id:${event.id}を削除`))
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