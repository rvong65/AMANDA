import React from 'react';

const Message = ({message, user}) => (
    <li className={`message ${user === message.username ? "right" : "left"}`}>
        {message.content}
    </li>
);

export default Message;