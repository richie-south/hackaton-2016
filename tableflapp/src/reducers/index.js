import { combineReducers } from 'redux'
import table from './table'
import isGameOn from './isGameOn'
import currentPlayerPosition from './currentPlayerPosition'
import goingUp from './goingUp'
import isGameOver from './isGameOver'
import currentPillarPosition from './currentPillarPosition'
import score from './score'


const rootReducer = combineReducers({
  table,
  isGameOn,
  currentPlayerPosition,
  goingUp,
  isGameOver,
  currentPillarPosition,
  score,
})

export default rootReducer
