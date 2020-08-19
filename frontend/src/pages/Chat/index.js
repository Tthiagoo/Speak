import React, { useEffect, useState,  } from 'react';
import {useHistory } from 'react-router-dom';

import queryString from 'query-string';
import io from 'socket.io-client'

import './styles.css'
import Tab from './components/Tab'
import Input from './components/Input';
import Messages from './components/Messages';

import Perfil from './components/Perfil'
import FriendsList from './components/FriendsList'
import ConectedList from './components/ConectedList'
import Fade from "@material-ui/core/Fade";

let socket

export default function Chat({ location }) {

  const [username, setUserName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])
  const [name, setName] = useState('')
  const [foto_url, setFoto] = useState('')
  

  const history = useHistory()
 
  const ENDPOINT = 'localhost:3333'

  useEffect(() => {
    const { username, room } = queryString.parse(location.search)
    setUserName(username)
    setRoom(room)

    setName(localStorage.getItem('name'))
    const localName = (localStorage.getItem('name'))

    const localBio = (localStorage.getItem('bio'))

    setFoto(localStorage.getItem('foto_url'))
    const localFoto = (localStorage.getItem('foto_url'))
    
    socket = io(ENDPOINT)

    socket.emit('join',{ username, room, foto_url:localFoto, name:localName, bio:localBio}, (error) => { 
      if(error) {
        alert(error);
        socket.emit('disconnect')
        socket.off()
        history.push('/')
      } 
      
    })

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
    <Fade in={true} timeout={1000}>
    <div className="chat-container">
      <div className="content">
        <div className="users">
          <Perfil foto={foto_url} name={name} />
          <FriendsList />
          <ConectedList users={users}/>
        </div>
        <div className="principal">
          <div className="chat">
            <Tab room={room} />
            <Messages messages={messages} username={username} />
          </div>
          <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />

        </div>

      </div>
    </div>
    </Fade>
  )
}