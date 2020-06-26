import React, { useEffect, useState } from 'react';
import { FaBars, FaCircle, FaSearch, FaPlusCircle } from 'react-icons/fa'
import io from 'socket.io-client';
//import api from '../../services/api'
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
          <div id="perfil">
            <div id="perfil-user">
              <div id="perfil-user-photo"></div>
              <div id="info">
                <span id="perfil-user-name">Thiago Pereira</span>
                <span id="perfil-user-status">Online <FaCircle size={6} color={"green"} /></span>
              </div>
            </div>
            <div id="perfil-config">
              <FaBars size={23} color={"white"} />
            </div>
            <div id="perfil-search">
              <input type="text" placeholder="Pesquise um nome de usuario" />
              <FaSearch id="search" size={15} />
            </div>
          </div>
          <div id="friends">
            <div id="friends-add">
              <span>Amigos</span>
              <FaPlusCircle color={"white"} size={20} />
            </div>
            <div id="friends-list">
              <ul>
                <li >
                  <div className="friends-list-photo"><FaCircle size={10} color={"green"} className={"status-user"} /></div>
                </li>
                <li >
                  <div className="friends-list-photo"><FaCircle size={10} color={"red"} className={"status-user"} /></div>
                </li>
                <li >
                  <div className="friends-list-photo"><FaCircle size={10} color={"yellow"} className={"status-user"} /></div>
                </li>
                <li >
                  <div className="friends-list-photo"><FaCircle size={10} color={"yellow"} className={"status-user"} /></div>
                </li>
                <li >
                  <div className="friends-list-photo"><FaCircle size={10} color={"green"} className={"status-user"} /></div>
                </li>


              </ul>
            </div>
          </div>
          <div id="conected">
            <span>Usuarios Na Sala</span>
            <div id="conected-list">
              <ul >
                <li>
                  <div className="conected-users">
                    <div className="conected-users-photo"> </div>
                    <div id="info-user">
                      <span id="conected-user-name">Thiago Pereira</span>
                      <span id="Descrição">Descrição do usuario</span>
                    </div>
                   
                  </div>
                </li>
                <li>
                  <div className="conected-users">
                    <div className="conected-users-photo">
                    </div>
                    <div id="info-user">
                      <span id="conected-user-name">Thiago Pereira</span>
                      <span id="Descrição">Descrição do usuario</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conected-users">
                  <div className="conected-users-photo"></div>
                    <div id="info-user">
                      <span id="conected-user-name">Thiago Pereira</span>
                      <span id="Descrição">Descrição do usuario</span>
                    </div>
                    
                    
                  </div>
                </li>
                <li>
                  <div className="conected-users">
                  <div className="conected-users-photo"></div>
                    <div id="info-user">
                      <span id="conected-user-name">Thiago Pereira</span>
                      <span id="Descrição">Descrição do usuario</span>
                    
                   
                    </div>
                  </div>
                </li>


              </ul>
            </div>

          </div>
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