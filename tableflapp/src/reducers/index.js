import { combineReducers } from 'redux'
import table from './table'
import isGameOn from './isGameOn'
import currentPlayerPosition from './currentPlayerPosition'


const rootReducer = combineReducers({
  table,
  isGameOn,
  currentPlayerPosition,
})

export default rootReducer
