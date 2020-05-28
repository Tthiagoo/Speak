import React from 'react';
//import io from 'socket.io-client';
import './styles.css'

export default function Chat() {
  //const socket = io('http://localhost:3333')

  return (
    <div className="chat-container">
      <div className="content">
        <div className="users">

        </div>

        <div className="principal">
          <div id="divisao">
            <div id="texto">
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}