import React, { useContext } from 'react'
import Operation from './Operation'
import AppContest from '../context/AppContext'

const Operations = ()　=> {
  const { state } = useContext(AppContest)
  console.log(state)
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>実行操作</th>
          <th>時間</th>
        </tr>
      </thead>
      <tbody>
      {state.operationLogs.map((operation, idx) => (
        <Operation operation={operation} key={idx}/>
      ))}
      </tbody>
    </table>
  )
}

export default Operations