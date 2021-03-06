import React from 'react'

import './styles.css'
import ContainerUsers from '../ContainerUsers'

export default function ConectedList({ users}) {
  
  return (
    <div id="conected">
      <span>Usuarios Na Sala</span>
      <div id="conected-list">
        <ContainerUsers users={users}  />
      </div>
    </div>
  )
}