import React from 'react';
import './styles.css';


export default function Modal({ children }) {
  return (
    <div className="modal">
      <div className="conteudoModal">
        <button className="close">X</button>
        <div className="conteudo">
          
          {children}
          </div>
      </div>
    </div>
  )
}