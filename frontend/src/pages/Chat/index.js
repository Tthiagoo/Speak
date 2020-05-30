import React, { useState } from 'react';
//import io from 'socket.io-client';
import './styles.css'

export default function Chat() {
  //const socket = io('http://localhost:3333')
  const [msg, stateMsg] = useState('');
  const [mensagens, stateMensagens] = useState([]);

  function HandleSubmit(event) {
    stateMsg(event.target.value)
  }
  function HandleForm(event) {
    event.preventDefault()
    if (msg.trim()) {
      stateMsg('')
    }
  }


  return (
    <div className="chat-container">
      <div className="content">
        <div className="users">
        </div>

        <div className="principal">
          <div className="chat">
            <div className="list">
              <div className="msg-box-other">
                <div className="user-img"></div>
                <div className="flr">
                  <div className="message">
                    <div className="msg-mine">
                      <p>alalalasahshshshsshshshshshs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="msg-box-mine">
                <div className="user-img"></div>
                <div className="flr">
                  <div className="message">
                    <div className="msg-mine">
                      <p>alalalasahshshshsshshshshshs</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div id="divisao">
            <form onSubmit={HandleForm}>
              <input id="texto" placeholder="mensagem"
                onChange={HandleSubmit}
                style={{ width: 1000 }}
                type="text"
                value={msg}
              />
            </form>

          </div>
        </div>

      </div>
    </div>

  )
}