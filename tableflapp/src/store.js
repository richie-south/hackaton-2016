import { createStore } from 'redux'
import rootReducer from './reducers/index'

const defaultState = {
  table: []
}

const store = createStore(rootReducer, defaultState)

export default store