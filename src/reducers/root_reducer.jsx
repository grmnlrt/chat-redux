import { combineReducers } from 'redux';

import messagesReducer from './messages_reducer';

export default combineReducers({
  messages: messagesReducer,
  channels: [ 'general', 'react', 'paris' ],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
});

// prompt("What is your username?") ||
