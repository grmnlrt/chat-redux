import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <p>
        <span className="author">{props.author}</span>
        <span className="date">{props.created_at}</span>
      </p>
      <p>{props.content}</p>
    </div>
  );
};

export default Message;
