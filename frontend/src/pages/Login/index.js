import React, { useState } from 'react';
import { Link , useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api'
import io from 'socket.io-client';
import { FaSignInAlt } from 'react-icons/fa'

import './styles.css'

const socket = io('http://localhost:3333')



export default function Login() {
  const [username, setUserName] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()
  const location = useLocation()
  
  

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await api.post('login', { username, senha })
     
      

      localStorage.setItem('name',response.data.name)
      localStorage.setItem('username',response.data.username)
      localStorage.setItem('bio',response.data.bio)
      localStorage.setItem('foto_url',response.data.foto_url)
      history.push('/chat',)

      socket.emit("entrar",{username})
      
      alert('deu certo')
      console.log(username,senha)
    } catch (err) {
      alert('error')
     
    }
  }


  return (
    <div className="logon-container">
      <section className="form">

        <form onSubmit={handleSubmit}>
          <a id="Logo"><img src="https://fontmeme.com/permalink/200525/75d0fecd03494c368addba67c07e43a1.png" alt="fontes-de-letras-cursivas" border="0" /></a>
          <h1>Faça seu login</h1>
          <input placeholder="Seu Username"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />

          <input placeholder="Sua senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          <button class="button" type="submit">Entrar</button>

          <Link className="back-link" to="/sessions">
            <FaSignInAlt size={16} color="#444" />
            Não tenho cadastro
            </Link>
        </form>
      </section>
    </div>
  )
}