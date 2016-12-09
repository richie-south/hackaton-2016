
import pillarPositionCalculator from '../pillarPositionCalculator'


const currentPillarPosition = (state = [], action) => {

  switch(action.type){
  case 'PILLAR_MOVE':
  return state.map((position) =>({
    row: position.row,
    column: position.column-1,
    color: position.color,
  }))


  case 'RERENDER_AT_FRONT':
    return pillarPositionCalculator()
  default:
    return state
  }
}

export default currentPillarPosition
