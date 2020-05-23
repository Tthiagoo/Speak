import React from 'react';

import {} from 'react-icons/fa'

import './styles.css'


export default function Login(){
  return(
    <div className="container">
      <section className="form">
        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Seu Username"/>

          <input placeholder="Sua senha"/>
          
          <button type="submit">Entrar</button>

          <a href="/register">Não tenho cadastro</a>
        </form>
      </section>
    </div>
  )
}