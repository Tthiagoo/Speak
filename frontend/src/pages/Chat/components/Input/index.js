import React from 'react'
import './styles.css';


export default function Input({ message, sendMessage, setMessage }) {
  return (

    <div id="divisao">
      
        <input id="texto" type="text" value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />

    </div>

  )
} 
