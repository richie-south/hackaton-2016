import { createStore } from 'redux'
import rootReducer from './reducers/index'

const currentPlayerPosition = {
  row: 5,
  column: 5,
} 


const table = () => {
  const empty = 'empty'
  const arr = []

  for(let i = 0; i < 50; i++){
    const row = []
    for(let k = 0; k < 50; k++){
      row.push(empty)
    }
    arr.push(row)
  }

  return arr
} 

const defaultState = {
  table: table(),
  isGameOn: false,
  currentPlayerPosition,
}

const store = createStore(rootReducer, defaultState)

export default store