import React, { useEffect, useState } from 'react';
import { FaBars, FaCircle, FaSearch, FaPlusCircle } from 'react-icons/fa'
import queryString from 'query-string';
import io from 'socket.io-client'

import api from '../../services/api';


import './styles.css'
import Tab from './components/Tab'
import Input from './components/Input';
import Messages from './components/Messages';

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
  const [name, setName] = useState('')
  const [foto, setFoto] = useState('')

  const[data,setData] = useState({})

  const ENDPOINT = 'localhost:3333'



  useEffect(() => {
    const { username, room } = queryString.parse(location.search)
    setName(localStorage.getItem('name'))
    setFoto(localStorage.getItem('foto_url'))
    
    
    socket = io(ENDPOINT)
    setUserName(username)
    setRoom(room)
    
    
    

    socket.on("responseData",(response)=>{
      const {foto_url, name, bio} = response
      console.log(foto_url, name, bio)
      socket.emit('join',{ username, room, foto_url, name, bio }, () => {
        console.log('join')
      })
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
      console.log(users)
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
          <Perfil foto={foto} name={name} />
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

  )
}