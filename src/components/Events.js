import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

const Events = ({ state, dispath})　=> (
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
    {state.map((event) => (
      <Event event={event} dispath={dispath} key={event.id}/>
    ))}
    </tbody>
  </table>
)

Events.propTypes = {
  state: PropTypes.array,
  dispath: PropTypes.func
}
export default Events