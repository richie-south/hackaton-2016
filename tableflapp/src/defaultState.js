
const currentPlayerPosition = [
  {
    row: 5,
    column: 5,
  },

  {
    row: 6,
    column: 5,
  },

  {
    row: 5,
    column: 6,
  },

  {
    row: 6,
    column: 6,
  },

]
const currentPillarPosition = [
  {
    row: 15,
    column: 49,
  }
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
  currentPillarPosition,
  goingUp: false,
  isGameOver: false,
}

export default defaultState