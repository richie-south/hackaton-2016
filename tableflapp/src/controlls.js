

import store from './store'
import * as actionsCreators from './actions/actionCreators'


document.addEventListener('keydown', function (e) {
  
  if(!store.getState().isGameOn){
    store.dispatch(actionsCreators.turnGameOn())
  }else if( e.keyCode === 32){
    store.dispatch(actionsCreators.jump())
  }

  if(e.keyCode === 80){
    store.dispatch(actionsCreators.turnGameOff())
  }

})
