

const isGameOn = (state = [], action) => {

  switch(action.type){
  case 'MOVE_PLAYER_DOWN':
    return state.map((position) => ({
      row: position.row+1,
      column: position.column,
    }))
  default:
    return state
  }
}

export default isGameOn

