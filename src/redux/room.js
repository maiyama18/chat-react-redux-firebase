export const roomInitialState = {
  selectedRoom: null,
}

const SELECT_ROOM = 'SELECT_ROOM'

export const selectRoom = room => ({
  type: SELECT_ROOM,
  payload: {
    room,
  },
})

export default (state = roomInitialState, action) => {
  switch (action.type) {
  case SELECT_ROOM:
    return {
      ...state,
      selectedRoom: action.payload.room,
    }
  default:
    return state
  }
}