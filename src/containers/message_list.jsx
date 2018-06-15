import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMessage } from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.getMessage();
  }

  renderMessagesList() {
    return this.props.messages.map((message) => {
      return (
        <Message author={message.author} content={message.content} created_at={message.created_at} />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Channel #general</h2>
        {this.renderMessagesList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
