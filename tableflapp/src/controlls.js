

import store from './store'
import * as actionsCreators from './actions/actionCreators'
import defaultState from './defaultState'


document.addEventListener('keydown', function (e) {
  
  const currentState = store.getState()

  console.log(currentState)
  if(currentState.isGameOver){
    console.log('hek')
    //store.dispatch
    store.dispatch({
      type: 'RESET',
      state:  defaultState,
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
