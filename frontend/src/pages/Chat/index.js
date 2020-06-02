import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import api from '../../services/api'
import uuid from 'uuid/dist/v4'
import './styles.css'


const socket = io('http://localhost:3333')
socket.on('connect', () => console.log('[IO]conectou'))


const myId = uuid()

export default function Chat() {

  const [msg, stateMsg] = useState('');
  const [mensagens, stateMensagens] = useState([]);

      


  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      stateMensagens([...mensagens, newMessage])
    socket.on('chat.message', handleNewMessage)
    return () => socket.off('chat.message', handleNewMessage)
    
  }, [mensagens])



  const HandleSubmit = event => stateMsg(event.target.value)

  const HandleForm = event => {
    event.preventDefault()
    if (msg.trim()) {
      socket.emit('chat.message', {
        id: myId,
        msg
      })
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

            {mensagens.map((m, index) => (
              <ul className={`list-${m.id === myId ? 'mine' : 'other'}`} key={index}>

                <li className="message" >

                  <div className={`name-container-${m.id === myId ? 'mine' : 'other'}`} >
                    <span className="user" style={{ fontSize: 12 }}><b>user</b></span>
                  </div>

                  <div className={`message-${m.id === myId ? 'mine' : 'other'}`} >
                    <p>{m.msg}</p>

                  </div>


                </li>

              </ul>
            ))}

          </div>
          <div id="divisao">
            <form onSubmit={HandleForm}>
              <input
                id="texto"
                placeholder="mensagem"
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