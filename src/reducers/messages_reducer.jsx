import { GET_MESSAGES } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case GET_MESSAGES:
      if (action.error) {
        return state;
      }
      return action.payload.messages;
    default:
      return state;
  }
}
