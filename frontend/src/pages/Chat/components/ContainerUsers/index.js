import React from 'react';


import {FaCircle} from 'react-icons/fa'

import './styles.css';

const ContainerUsers = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            
            <div className="activeContainer">
              <h2>
                {users.map(({username}) => (
                  <div key={username} className="activeItem">
                    {username}
                    <FaCircle/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default ContainerUsers;