import React from 'react'

const Oeration = ({ operation }) => {
  console.log(operation)
  return (
    <tr>
      <td>{operation.log}</td>
      <td>{operation.time}</td>
    </tr>
  )
}

export default Oeration