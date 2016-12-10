
import pillarPosition from './pillarPositionCalculator'
const currentPlayerPosition = [
{
  row: 24,
  column: 10,
  color: '#e8e74c '
},

{
  row: 24,
  column: 11,
  color: '#e8e74c '
},

{
  row: 25,
  column: 11,
  color: '#e8e74c '
},

{
  row: 26,
  column: 11,
  color: '#929292 '
},

{
  row: 22,
  column: 12,
  color: '#000000 '
},

{
  row: 23,
  column: 12,
  color: '#e8e74c '
},

{
  row: 24,
  column: 12,
  color: '#e8e74c '
},

{
  row: 25,
  column: 12,
  color: '#e8e74c '
},

{
  row: 22,
  column: 13,
  color: '#e8e74c '
},

{
  row: 23,
  column: 13,
  color: '#e8e74c '
},

{
  row: 24,
  column: 13,
  color: '#e8e74c '
},

{
  row: 25,
  column: 13,
  color: '#e8e74c '
},

{
  row: 26,
  column: 13,
  color: '#929292 '
},

{
  row: 22,
  column: 14,
  color: '#000000 '
},

{
  row: 23,
  column: 14,
  color: '#f78f20 '
},

{
  row: 23,
  column: 15,
  color: '#f78f20 '
},

]

const table = () => {
  const empty = 'empty'
  const arr = []

  for(let i = 0; i < 50; i++){
    const row = []
    for(let k = 0; k < 50; k++){
      row.push(empty)
    }
    arr.push(row)
  }

  return arr
}

const defaultState = {
  table: table(),
  isGameOn: false,
  currentPlayerPosition,
  currentPillarPosition: pillarPosition(),
  goingUp: false,
  isGameOver: false,
  score: 0,
}

export default defaultState
