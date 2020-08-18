import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import Modal2 from '../components/Modal'
import { FaCheckCircle } from 'react-icons/fa'
import Fade from "@material-ui/core/Fade";

import api from '../../services/api';


import { FaCameraRetro } from 'react-icons/fa'

import './styles.css'

export default function Cadastro() {

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit"
  })
  const [open, setOpen] = useState(false);
  const [foto, setFoto] = useState(null)
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [senha, setSenha] = useState('')
  const [description, setDescription] = useState('')

  const history = useHistory()

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    history.push('/')
    setOpen(false);
  };



  const preview = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto])

  async function handleRegister(e) {


    const data = new FormData()

    data.append('name', name)
    data.append('username', userName)
    data.append('senha', senha)
    data.append('foto', foto)
    data.append('bio', description)
    try {
      await api.post('/sessions', data)
      handleModalOpen()
      //alert(`Seu nome de usuario é: ${userName} e senha: ${senha}`)
      //history.push('/')


    } catch (err) {
      alert('error')

    }
  }

  return (
    <Fade in={true} timeout={1100}>
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

          <form onSubmit={handleSubmit(handleRegister)}>
            <h1>Cadastro</h1>
            <input placeholder="Seu Nome"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              ref={register(
                {
                  required: 'Este campo é obrigatorio',
                  minLength: {
                    value: 3,
                    message: 'Digite seu nome'
                  },
                  maxLength: {
                    value: 27,
                    message: 'Nome maior do que o pertimido'
                  },
                  pattern: {
                    value: /[a-zA-Z\u00C0-\u00FF ]+/i,
                    message: 'É permitido apenas letras',
                  }
                })}
            />
            <ErrorMessage errors={errors} name="name">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}> {message}</p>
                ))
              }
            </ErrorMessage>


            <input placeholder="Username"
              value={userName}
              name="username"
              onChange={e => setUserName(e.target.value)}
              ref={register({
                required: true,
                minLength: 5,
                maxLength: 10,
              })}
            />
            {errors.username?.type === "required" && <p className="error">Este campo é obrigatorio</p>}
            {errors.username?.type === "minLength" && <p className="error">Usuario minimo de 5 caracteres</p>}
            {errors.username?.type === "maxLength" && <p className="error">É permitido maximo de 10 caracteres</p>}
            <input placeholder="Sua Senha"
              type="password"
              name="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              ref={register({
                required: true,
                minLength: 3,

              })}
            />
            {errors.password?.type === "required" && <p className="error">Este campo é obrigatorio</p>}
            {errors.password?.type === "minLength" && <p className="error">Senha minima de 3 caracteres</p>}
            <textarea placeholder="Fale sobre você"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <button className="button" type="submit">Cadastrar</button>

          </form>
          <Modal2 open={open} close={handleModalClose}>
            <FaCheckCircle color="green" size={50} />
            <h2>Cadastro concluido com sucesso!</h2>
            Seu nome de usuario é:{userName} e senha:{senha}
          </Modal2>
        </div>
      </div>
    </Fade>
  )
}