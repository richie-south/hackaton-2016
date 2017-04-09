

import store from './store'
import * as actionsCreators from './actions/actionCreators'
import defaultState from './defaultState'


document.addEventListener('keydown', function (e) {

  const currentState = store.getState()

  if(currentState.isGameOver){
    store.dispatch({
      type: 'RESET',
      state:  defaultState,
    })
    store.dispatch(actionsCreators.turnGameOn())
    store.dispatch(actionsCreators.gameNotOver())
    return
  }

  if(!currentState.isGameOn){
    return store.dispatch(actionsCreators.turnGameOn())
  }else if( e.keyCode === 32){
    return store.dispatch(actionsCreators.jump())
  }

  if(e.keyCode === 80){
    return store.dispatch(actionsCreators.turnGameOff())
  }

})
