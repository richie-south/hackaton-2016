

const currentPlayerPosition = (state = [], action) => {

  switch(action.type){
  case 'MOVE_PLAYER_UP':
  return state.map((position) => ({
    row: position.row-1,
    column: position.column,
    color: position.color,
  }))
  case 'MOVE_PLAYER_DOWN':
    return state.map((position) => ({
      row: position.row+1,
      column: position.column,
      color: position.color,
    }))
  default:
    return state
  }
}

export default currentPlayerPosition
