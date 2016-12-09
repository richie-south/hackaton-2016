
const goingUp = (state = [], action) => {

  switch(action.type){
  case 'JUMP':
  return true;
  case 'STOP_JUMP':
  return false;
  default:
    return state
  }
}

export default goingUp
