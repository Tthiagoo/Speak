import React from 'react'
import './styles.css';



export default function Msg({ message: { user, text }, username }) {
  let sentByUser = false
  const Name = username
  if (user === Name) {
    sentByUser = true
  }
  return (
    sentByUser
      ? (
        <div className="messageContainer justifyEnd" >
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
          </div>
        </div>
      ) : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <span className="sentText pl-10">{user}</span>
            <p className="messageText colorDark">{text}</p>
          </div>

        </div>
      )
  )
} 
