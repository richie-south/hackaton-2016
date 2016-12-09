
import store from './store'
import * as actionsCreators from './actions/actionCreators'


function render(){
  if(store.getState().isGameOn){
    //store.dispatch(actionsCreators.movePlayerUp())
    store.dispatch(actionsCreators.movePlayerDown())
  }
}



(function animloop(){
  window.requestAnimationFrame(animloop)
  render()
})()