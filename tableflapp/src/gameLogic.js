
import store from './store'
import * as actionsCreators from './actions/actionCreators'

let jumpCount = 0
function render(){
  if(store.getState().isGameOn){
    if(store.getState().goingUp){
      if(jumpCount > 10){
          store.dispatch(actionsCreators.stopJump())
          jumpCount = 0;
      }
      store.dispatch(actionsCreators.movePlayerUp())
      jumpCount++;
    }else{
      store.dispatch(actionsCreators.movePlayerDown())
    }
    //store.dispatch(actionsCreators.movePlayerUp())

  }
}



(function animloop(){
  window.requestAnimationFrame(animloop)
  render()
})()
