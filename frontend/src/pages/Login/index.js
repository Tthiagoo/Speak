import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import io from 'socket.io-client'
import Fade from "@material-ui/core/Fade";

import { FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa'

import './styles.css'

let socket

export default function Login() {
  const [username, setUserName] = useState('')
  const [senha, setSenha] = useState('')
  const room = 'Main'
  const ENDPOINT = 'localhost:3333'


  const history = useHistory()


  function showPassword() {
    let input = document.querySelector("#inputPassword");
    let eye = document.querySelector('#eye')
    let eyeSlash = document.querySelector('#Slash')
  

    
   
    if (input.getAttribute('type') === 'password') {
      input.setAttribute("type", "text");
      eye.setAttribute('display','none')
      eyeSlash.setAttribute('display','inherit')


    }else{
      eyeSlash.setAttribute('display','none')
      eye.setAttribute('display','inherit')
      
      input.setAttribute("type", "password")
    }

}
async function handleSubmit(e) {
  e.preventDefault()
  try {
    socket = io(ENDPOINT)

    const response = await api.post('login', { username, senha })


    localStorage.setItem('name', response.data.name)
    localStorage.setItem('username', response.data.username)
    localStorage.setItem('bio', response.data.bio)
    localStorage.setItem('foto_url', response.data.foto_url)


    alert('deu certo')

    history.push(`/chat?username=${username}&room=${room}`)
    socket.emit('infoUser', response.data)

  } catch (err) {
    alert('Usuario e/ou senha incorretos')

  }
}


return (
<Fade in={true} timeout={1000}>
  <div className="logon-container">
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div id="Logo"><img src="http://localhost:3333/files/balao-speak.png" alt="fontes-de-letras-cursivas" border="0" /></div>
        <h1>Faça seu login</h1>
        <input placeholder="Seu Username"
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <div id="password">
          <input placeholder="Sua senha" type="password" value={senha} id="inputPassword"
            onChange={e => setSenha(e.target.value)} />
          <FaEye size={25} id="eye" onClick={showPassword} />
          <FaEyeSlash size={25} id="Slash" onClick={showPassword} display={'none'} />

        </div>

        <button className="button" type="submit">Entrar</button>

        <Link className="back-link" to="/sessions">
          <FaSignInAlt size={16} color="#444" />
            Não tenho cadastro
          </Link>

      </form>
    </section>
  </div>
  </Fade>
)
}