import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reduce'

const rootReducer = combineReducers({
  userReducer
})

export default rootReducer
