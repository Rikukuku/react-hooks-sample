import { combineReducers } from 'redux'
import events from './events'
import operationLogs from './oprationLog'

export default combineReducers({ events, operationLogs})