import React, { useReducer, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../store/reducers/'

// components
import EventForm from './EventForm'
import Events from './Events'
import Oerations from './Operations'

import AppContext from '../context/AppContext'
const APP_EKY = 'AppWithRedux'
const App = () => {
  const appState = localStorage.getItem(APP_EKY)
  const initialState = appState ? JSON.parse(appState): {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    localStorage.setItem(APP_EKY, JSON.stringify(state))
  }, [state])
 
  return (
    <AppContext.Provider value={{state, dispatch}}>
    <div className="container-fluid">
      <h4>イベント作成画面</h4>
      <EventForm />
      <Events />
      <h4>情報操作ログ</h4>
      <Oerations />
    </div>
    </AppContext.Provider>

  )
}
export default App;
