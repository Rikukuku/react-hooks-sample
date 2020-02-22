import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Event from './Event'
import AppContest from '../context/AppContext'

const Events = ()　=> {
  const { state } = useContext(AppContest)
  return (
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
      {state.events.map((event) => (
        <Event event={event} key={event.id}/>
      ))}
      </tbody>
    </table>
  )
}

Events.propTypes = {
  state: PropTypes.array,
}
export default Events