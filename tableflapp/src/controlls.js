

import store from './store'
import * as actionsCreators from './actions/actionCreators'


document.addEventListener('keypress', function (e) {
  if(e.keyCode === 80){
    console.log("asd")
    store.dispatch(actionsCreators.turnGameOff())
  }
  if(!store.getState().isGameOn){
    store.dispatch(actionsCreators.turnGameOn())
  }else if( e.keyCode === 32){
    //store.dispatch(actionsCreators.movePlayerUp())
    store.dispatch(actionsCreators.jump())
  }

})
