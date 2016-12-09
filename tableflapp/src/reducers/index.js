import { combineReducers } from 'redux'
import table from './table'
import isGameOn from './isGameOn'
import currentPlayerPosition from './currentPlayerPosition'
import goingUp from './goingUp'
import isGameOver from './isGameOver'
import pillarMovement from './pillarMovement'


const rootReducer = combineReducers({
  table,
  isGameOn,
  currentPlayerPosition,
  goingUp,
  isGameOver,
  pillarMovement,
})

export default rootReducer
