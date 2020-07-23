import React from 'react';
import { FaPlusCircle, FaCircle } from 'react-icons/fa'
import './styles.css'

export default function FriendsList() {
  return (
    <div id="friends">
      <div id="friends-add">
        <span>Amigos</span>
        <FaPlusCircle color={"white"} size={20} id="FaPlusCircle" />
      </div>
      <div id="friends-list">
        <ul>
          <li >
            <div className="friends-list-photo"><FaCircle size={10} color={"green"} className={"status-user"} /></div>
          </li>
        </ul>
      </div>
    </div>
  )
}