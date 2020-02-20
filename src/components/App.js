import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../store/reducers'

// components
import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  const [state, dispath] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
    <h4>イベント作成画面</h4>
    <EventForm 
      state={state}
      dispath={dispath}
    />
    <Events 
      state={state}
      dispath={dispath}
    />
  </div>
  )
}
export default App;
