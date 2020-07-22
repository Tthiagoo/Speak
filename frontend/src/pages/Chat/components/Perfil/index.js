import React from 'react'
import {FaCircle, FaBars, FaSearch} from 'react-icons/fa'
import './styles.css'

export default function Perfil({foto, name}) {
  return (
    <div id="perfil">
      <div id="perfil-user">
        <div id="perfil-user-photo" style={{ backgroundImage: `url(${foto}` }}></div>
        <div id="info">
          <span id="perfil-user-name">{name}</span>
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
  )
}