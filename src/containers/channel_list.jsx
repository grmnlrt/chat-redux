import React, { Component } from 'react';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { channels: ["general", "react", "paris"] };
  }

  renderChannelsList() {
    return this.state.channels.map((channel) => {
      return (
        <p>#{channel}</p>
      );
    });
  }

  render() {
    return (
      <div className="channel-list">
        <h1>Redux chat</h1>
        {this.renderChannelsList()}
      </div>
    );
  }
}

export default ChannelList;
