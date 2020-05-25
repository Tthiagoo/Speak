import React from 'react';
import {Link} from 'react-router-dom';

import {FaSignInAlt} from 'react-icons/fa'

import './styles.css'


export default function Login(){
  return(
    <div className="logon-container">
      <section className="form">
        <form>
        <a id="Logo" href="https://fontmeme.com/pt/fontes-de-letras-cursivas/"><img src="https://fontmeme.com/permalink/200525/75d0fecd03494c368addba67c07e43a1.png" alt="fontes-de-letras-cursivas" border="0"/></a>
          <h1>Faça seu login</h1>
          <input placeholder="Seu Username"/>

          <input placeholder="Sua senha"/>
          
          <button class="button" type="submit">Entrar</button>

          <Link className ="back-link"to="/cadastro">
          <FaSignInAlt size={16} color="#444"/>
            Não tenho cadastro
            </Link>
        </form>
      </section>
    </div>
  )
}