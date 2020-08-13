import React, { useEffect, useState } from 'react';
import queryString from 'query-string';


import { FaCircle } from 'react-icons/fa'

import api from '../../../../services/api'

import './styles.css';

export default function ContainerUsers({ users }) {



  return (
    <div>
      {
        users
          ? (
            <ul>
              {users.map(({ username, room }) => (

                <li key={username}>


                  <div className="conected-list-users">
                    <div className="conected-list-users-photo"> </div>
                    <div className="info-user">
                      <span className="conected-list-user-name">{username}</span>
                      <span className="conected-list-user-description">{room}</span>
                    </div>
                    <div className="info-status">
                      <FaCircle size={10} color={"yellow"} className="status-circle" />
                      <span>2 min</span>
                    </div>
                  </div>
                  <div className="linha"></div>
                </li>

              ))}
            </ul>
          )
          : null
      }
    </div>
  );
}

