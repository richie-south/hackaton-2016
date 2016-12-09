

import store from './store'
import * as actionsCreators from './actions/actionCreators'


document.addEventListener('keydown', function (e) {
  console.log('hej')

  if(!store.getState().isGameOn){
    store.dispatch(actionsCreators.turnGameOn())
  }else if(e.keyCode === 80){   
    store.dispatch(actionsCreators.turnGameOff())
  } 
})
