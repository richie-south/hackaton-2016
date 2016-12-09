

const isGameOver = (state = [], action) => {

  switch(action.type){
  case 'SET_GAME_OVER':
    return true
  case 'SET_GAME_NOT_OVER':
    return false
  default:
    return state
  }
}

export default isGameOver