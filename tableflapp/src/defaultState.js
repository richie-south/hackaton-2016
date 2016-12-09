
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
const pillarPosition = () => {
  /*const startPos = {
    row: 15,
    column: 49,
  }*/
  let randomNumber = 15;
  const result = []
  for(let i = 0; i < 3; i++){
    for(let k = 0; k < 50; k++){
      if(k < randomNumber || k > (randomNumber+15)){
        result.push({
          row:k,
          column:50+i,
        })
      }
    }
  }
return result;
}
const currentPillarPosition = pillarPosition()

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
  currentPillarPosition,
  goingUp: false,
  isGameOver: false,
}

export default defaultState
