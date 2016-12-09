
export const movePlayerUp = () => ({
  type: 'MOVE_PLAYER_UP',
})


export const turnGameOn = () => ({
  type: 'TURN_ON_GAME',
})

export const turnGameOff = () => ({
  type: 'TURN_OFF_GAME',
})

export const movePlayerDown = (row, column) => ({
  type: 'MOVE_PLAYER_DOWN',
  row,
  column,
})