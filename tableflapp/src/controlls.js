

import store from './store'
import * as actionsCreators from './actions/actionCreators'

const currentPlayerPosition = [
  {
    row: 5,
    column: 5,
  },

  {
    row: 6,
    column: 5,
  },

  {
    row: 5,
    column: 6,
  },

  {
    row: 6,
    column: 6,
  },

]
const currentPillarPosition = [
  {
    row: 50,
    column: 15,
  }
]

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




document.addEventListener('keydown', function (e) {
  
  const currentState = store.getState()

  console.log(currentState)
  if(currentState.isGameOver){
    console.log('hek')
    //store.dispatch
    store.dispatch({
      type: 'RESET',
      state:  {
        table: table(),
        isGameOn: false,
        currentPlayerPosition,
        currentPillarPosition,
        goingUp: false,
        isGameOver: false,
      },
    })
    store.dispatch(actionsCreators.turnGameOn())
    store.dispatch(actionsCreators.gameNotOver())
    return;
  }

  if(!currentState.isGameOn){
    store.dispatch(actionsCreators.turnGameOn())
  }else if( e.keyCode === 32){
    store.dispatch(actionsCreators.jump())
  }

  if(e.keyCode === 80){
    store.dispatch(actionsCreators.turnGameOff())
  }

})
