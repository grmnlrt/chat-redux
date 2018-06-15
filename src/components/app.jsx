import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div id="nav">
        <img src="https://secure.meetupstatic.com/photos/event/6/f/6/d/600_456508525.jpeg" alt=""/>
      </div>
      <div id="slack-app">
        <ChannelList />
        <div className="chat">
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default App;
