import React,{useState, useMemo} from 'react';
import { Link } from 'react-router-dom'

import { FaMars } from 'react-icons/fa'

import { FaVenus } from 'react-icons/fa'

import { FaCameraRetro} from 'react-icons/fa'

import './styles.css'

export default function Cadastro() {
  const [foto, setFoto] = useState(null)

  const preview = useMemo(()=>{
    return foto ? URL.createObjectURL(foto) : null;
  },[foto])

  return (
    <div className="register-container">
      <div className="content">

        <section>
          <label id="foto" 
          style={{backgroundImage:`url(${preview})`}}
          className={foto ? 'has-foto':''}
          >
            <input type="file" id="" onChange={event=>setFoto(event.target.files[0])}/>
            <FaCameraRetro size={16} color="#444"/>
          </label>
          <p><b>Escolha sua foto</b></p>
          <div className="genero">
          <FaMars size={20 } color="#283593" id="Imale"/>
            <input type="checkbox" name="" />

            <input type="checkbox" name="" style={{marginLeft:50}}/>
            <FaVenus size={20} color="#F50057" id="Ifemale"/>


          </div>
        </section>

        <form>
          <h1>Cadastro</h1>
          <input placeholder="Seu Nome" />
          <input placeholder="Username" />
          <input type="password" placeholder="Sua Senha" name="" id="" />
          <textarea placeholder="Fale sobre você"/>

        </form>
      </div>
    </div>
  )
}