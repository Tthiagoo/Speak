import React from 'react'
import { FaCircle } from 'react-icons/fa';
import './styles.css'

export default function ConectedList({users}) {
  return (
    <div id="conected">
      <span>Usuarios Na Sala</span>
      <div id="conected-list">
        <ul >
          <li>
            <div className="conected-list-users">
              <div className="conected-list-users-photo"> </div>
              <div className="info-user">
                <span className="conected-list-user-name">Thiago Pereira</span>
                <span className="conected-list-user-description">Descrição do usuario</span>
              </div>
              <div className="info-status">
                <FaCircle size={10} color={"yellow"} className="status-circle" />
                <span>2 min</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}