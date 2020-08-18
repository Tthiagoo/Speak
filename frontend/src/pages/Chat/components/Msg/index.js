import React from 'react'
import './styles.css';
import Grow from "@material-ui/core/Grow";



export default function Msg({ message: { user, text }, username }) {
  let sentByUser = false
  const Name = username
  if (user === Name) {
    sentByUser = true
  }
  return (

    sentByUser
      ? (
        <Grow in={true}>
          <div className="messageContainer justifyEnd" >
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{text}</p>
            </div>
          </div>
        </Grow>
      ) : (
        <Grow in={true}>
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <span className="sentText pl-10">{user}</span>
              <p className="messageText colorDark">{text}</p>
            </div>

          </div>
        </Grow>
      )

  )
} 
