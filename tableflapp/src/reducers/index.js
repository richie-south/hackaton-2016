import { combineReducers } from 'redux'
import table from './table'
import isGameOn from './isGameOn'
import currentPlayerPosition from './currentPlayerPosition'
import goingUp from './goingUp'


const rootReducer = combineReducers({
  table,
  isGameOn,
  currentPlayerPosition,
  goingUp,
})

export default rootReducer
