
import store from './store'
import * as actionsCreators from './actions/actionCreators'

let jumpCount = 0
function render(){

  const currentState = store.getState()

  if(currentState.isGameOn){

    if(currentState.currentPlayerPosition.find(a => a.row > 50 || a.row < 0)){
      store.dispatch(actionsCreators.gameOver())
      store.dispatch(actionsCreators.turnGameOff())
    }


    const pillarPos = currentState.currentPillarPosition[0]
    if(pillarPos.column < -3){
      store.dispatch(actionsCreators.reusePillar())
      store.dispatch(actionsCreators.increaseScore())
    }


    currentState.currentPlayerPosition.forEach(playerPosition => {
      const isCollision = currentState.currentPillarPosition.find(pillarPosition =>
        pillarPosition.row === playerPosition.row &&
        pillarPosition.column === playerPosition.column)

      if(isCollision){
        store.dispatch(actionsCreators.gameOver())
        store.dispatch(actionsCreators.turnGameOff())
      }
    })


    if(currentState.goingUp){
      if(jumpCount > 10){
          store.dispatch(actionsCreators.stopJump())
          jumpCount = 0;
      }
      store.dispatch(actionsCreators.movePlayerUp())
      jumpCount++;
    }else{
      store.dispatch(actionsCreators.movePlayerDown())
    }
    store.dispatch(actionsCreators.pillarMovement())
    //store.dispatch(actionsCreators.movePlayerUp())

  }
}



(function animloop(){
  window.requestAnimationFrame(animloop)
  render()
})()
