import React, { useState, useMemo } from 'react';

import api from '../../services/api';


import { FaCameraRetro } from 'react-icons/fa'

import './styles.css'

export default function Cadastro() {
  const [foto, setFoto] = useState(null)
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [senha, setSenha] = useState('')
  const [description, setDescription] = useState('')

  const preview = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto])

  async function handleSubmit(e) {
    e.preventDefault()

    const data = new FormData()

    data.append('name', name)
    data.append('username', userName)
    data.append('senha', senha)
    data.append('foto', foto)
    data.append('bio', description)
    try {
      await api.post('/sessions', data)
      alert(`Seu nome de usuario é: ${userName} e senha: ${senha}`)

    } catch(err){
      alert('error')

    }
  }

  return (
    <div className="register-container">
      <div className="content">

        <section>
          <label id="foto"
            style={{ backgroundImage: `url(${preview})` }}
            className={foto ? 'has-foto' : ''}
          >
            <input type="file" id="" onChange={event => setFoto(event.target.files[0])} />
            <FaCameraRetro size={16} color="#444" />
          </label>
          <p><b>Escolha sua foto</b></p>

        </section>

        <form onSubmit={handleSubmit}>
          <h1>Cadastro</h1>
          <input placeholder="Seu Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <input placeholder="Sua Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <textarea placeholder="Fale sobre você"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}