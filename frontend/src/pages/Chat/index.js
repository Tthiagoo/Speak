import React, { useEffect, useState } from 'react';
import { FaBars, FaCircle, FaSearch, FaPlusCircle } from 'react-icons/fa'
import queryString from 'query-string';
import io from 'socket.io-client'
import './styles.css'

import Tab from './Tab'
import TabItem from './Tab/TabItem';


let socket

export default function Chat({ location }) {

  const [username, setUserName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost:3333'

  useEffect(() => {
    const { username, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)
    setUserName(username)
    setRoom(room)

    socket.emit('join', { username, room }, () => {

    })
    return () => {
      socket.emit('disconnect')
      socket.off()
    }

  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  console.log(message, messages)
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
                  <div className="conected-list-users">
                    <div className="conected-list-users-photo"> </div>
                    <div className="info-user">
                      <span className="conected-list-user-name">Thiago Pereira</span>
                      <span className="conected-list-user-description">Descrição do usuario</span>
                    </div>
                    <div className="info-status">
                      <FaCircle size={10} color={"yellow"} className="status-circle" />
                      <span>2 min</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conected-list-users">
                    <div className="conected-list-users-photo"> </div>
                    <div className="info-user">
                      <span className="conected-list-user-name">Thiago Pereira</span>
                      <span className="conected-list-user-description">Descrição do usuario</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conected-list-users">
                    <div className="conected-list-users-photo"> </div>
                    <div className="info-user">
                      <span className="conected-list-user-name">Thiago Pereira</span>
                      <span className="conected-list-user-description">Descrição do usuario</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conected-list-users">
                    <div className="conected-list-users-photo"> </div>
                    <div className="info-user">
                      <span className="conected-list-user-name">Thiago Pereira</span>
                      <span className="conected-list-user-description">Descrição do usuario</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conected-list-users">
                    <div className="conected-list-users-photo"> </div>
                    <div className="info-user">
                      <span className="conected-list-user-name">Thiago Pereira</span>
                      <span className="conected-list-user-description">Descrição do usuario</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conected-list-users">
                    <div className="conected-list-users-photo"> </div>
                    <div className="info-user">
                      <span className="conected-list-user-name">Thiago Pereira</span>
                      <span className="conected-list-user-description">Descrição do usuario</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="principal">
          <div className="chat">
            <Tab room={room} />
          </div>

          <div id="divisao">
            <input id="texto" type="text" value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
          </div>
        </div>

      </div>
    </div>

  )
}