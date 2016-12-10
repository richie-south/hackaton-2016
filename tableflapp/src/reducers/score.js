const scorePoints = (state = [], action) => {

  switch(action.type){
  case 'INCREASE_SCORE':
    return state+1
  case 'DECREASE_SCORE':
    return state-1
  default:
    return state
  }
}

export default scorePoints
