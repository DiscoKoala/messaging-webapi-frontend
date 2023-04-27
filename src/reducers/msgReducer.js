import constants from '../constants/actionTypes.js'

let initialState = {
  messages: [],
  sentMessage: null
}

const msgReducer = (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch(action.type) {
    case constants.FETCH_MSGS:
      updated['messages'] = action.messages;
      return updated;
    case constants.SEND_MSG:
      updated['sentMessages'] = action.sentMessage;
      return updated;
    default:
      return state;
  }
}

export default msgReducer;