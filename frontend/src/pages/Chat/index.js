import React, { useEffect, useState } from 'react';
import { FaBars, FaCircle, FaSearch, FaPlusCircle } from 'react-icons/fa'
import queryString from 'query-string';
import io from 'socket.io-client'

import api from '../../services/api';


import './styles.css'
import Tab from './components/Tab'
import Input from './components/Input';
import Messages from './components/Messages';
import ContainerUsers from './components/ContainerUsers'
import Perfil from './components/Perfil'
import FriendsList from './components/FriendsList'
import ConectedList from './components/ConectedList'


let socket

export default function Chat({ location }) {



  const [username, setUserName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost:3333'

  const name = localStorage.getItem('name')
  const foto = localStorage.getItem('foto_url')
  console.log(name)


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
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className="chat-container">
      <div className="content">
        <div className="users">
          <Perfil foto={foto} name={name}/>
          <FriendsList/>
          <ConectedList/>
        </div>
        <div className="principal">
          <div className="chat">
            <Tab room={room} />
            <Messages messages={messages} username={username} />
          </div>
          <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
          <ContainerUsers users={users} />
        </div>

      </div>
    </div>

  )
}