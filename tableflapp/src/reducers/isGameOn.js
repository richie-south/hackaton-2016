

const isGameOn = (state = [], action) => {

  switch(action.type){
  case 'TURN_ON_GAME':
    return true
  case 'TURN_OFF_GAME':
    return false
  default:
    return state
  }
}

export default isGameOn