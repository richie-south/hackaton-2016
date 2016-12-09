
export const movePlayerUp = () => ({
  type: 'MOVE_PLAYER_UP',
})
export const jump = () => ({
  type: 'JUMP',
})
export const stopJump = () => ({
  type: 'STOP_JUMP',
})
export const turnGameOn = () => ({
  type: 'TURN_ON_GAME',
})

export const turnGameOff = () => ({
  type: 'TURN_OFF_GAME',
})

export const movePlayerDown = () => ({
  type: 'MOVE_PLAYER_DOWN',
})

export const gameOver = () => ({
  type: 'SET_GAME_OVER',
})

export const gameNotOver = () => ({
  type: 'SET_GAME_NOT_OVER',
})

export const pillarMovement = () => ({
  type: 'PILLAR_MOVE',
})

export const reusePillar = () => ({
  type: 'RERENDER_AT_FRONT',
})


