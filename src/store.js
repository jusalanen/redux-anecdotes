import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer.reducer,
  notification: notificationReducer.reducer,
  filter: filterReducer.reducer
})

const store = createStore(reducer)

export default store