
const currentPillarPosition = (state = [], action) => {

  switch(action.type){
  case 'PILLAR_MOVE':
  return state.map((position) =>({
    row: position.row,
    column: position.column-1,
  }))
  default:
    return state
  }
}

export default currentPillarPosition
