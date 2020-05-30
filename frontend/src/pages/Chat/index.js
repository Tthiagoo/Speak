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

          <div className="chat">
            <div className="list">
              <div className="msg-box-mine">
                <div className="user-img"></div>
                <div className="flr">
                  <div className="message">
                    <div className="msg">
                      <p>alalalasahshshshsshshshshshs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="msg-box-other">
                <div className="user-img"></div>
                <div className="flr">
                  <div className="message">
                    <div className="msg"> <p>alalala
                    s
                    sssssssssssssssss
                    s
                      ssaina ais aa aj</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="divisao">
            <div id="texto">
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}