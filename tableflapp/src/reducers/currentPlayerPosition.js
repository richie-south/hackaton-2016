

const isGameOn = (state = [], action) => {

  switch(action.type){
  case 'MOVE_PLAYER_DOWN':
    
    return {
      row: state.row+1,
      column: state.column,
    }
  default:
    return state
  }
}

export default isGameOn