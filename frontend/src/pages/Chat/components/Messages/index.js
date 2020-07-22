import React from 'react'
import './styles.css';


import Msg from '../Msg'
const Messages = ({ messages, username }) => (
  <div className="messages">
    {messages.map((message, i) => <div key={i}><Msg message={message} username={username}/></div>)}
  </div>
);

export default Messages;
