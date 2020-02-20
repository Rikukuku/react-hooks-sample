import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../store/reducers'
import { CREATE_EVENT } from '../store/actions'

const App = () => {
  const [state, dispath] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const createEvent = e => {
    e.preventDefault()
    dispath(
      {
        type: CREATE_EVENT,
        title: title,
        body:body
      }
    )
    setTitle('')
    setBody('')
  }
  console.log(state)
  return (
    <div className="container-fluid">
    <h4>イベント作成画面</h4>
    <div className='form-group'>
      <label　htmlFor="formEventTitle">Title</label>
      <input className="form-control" id="formEventTitle" value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>

    <div className='form-group'>
      <label　htmlFor="formEventBody">Body</label>
      <textarea className="form-control" id="formEventBody" value={body} onChange={(e) => setBody(e.target.value)}/>
    </div>

    <button className="btn btn-primary" onClick={createEvent}>イベントを作成する</button>
    <button className="btn btn-danger">イベントを全て削除する</button>

    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディー</th>
          <th></th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
  )

}
export default App;
