import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <div className="container-fluid">
    <h4>イベント作成画面</h4>
    <div className='form-group'>
      <label　htmlFor="formEventTitle">タイトル</label>
      <input className="form-control" id="formEventTitle" />
    </div>

    <div className='form-group'>
      <label　htmlFor="formEventBody">ボデイー</label>
      <textarea className="form-control" id="formEventBody" />
    </div>

    <button className="btn btn-primary">イベントを作成する</button>
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
export default App;
