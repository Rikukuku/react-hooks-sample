import { 
  CREATE_OPERATION,
  DELETE_ALL_OPERATIONS
} from '../actions/actiontypes'

const operationLogs = (state = [], action) => {
  switch(action.type) {
    case CREATE_OPERATION:
      const operationLog = {
        log: action.log,
        time: action.time
      }
      return [operationLog, ...state]
    case DELETE_ALL_OPERATIONS:
      return []
    default:
      return state
  }
}

export default operationLogs