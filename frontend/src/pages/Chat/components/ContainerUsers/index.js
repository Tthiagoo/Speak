import React from 'react';
import { FaCircle } from 'react-icons/fa'
import './styles.css';
import Zoom from "@material-ui/core/Zoom";

export default function ContainerUsers({ users }) {

  return (
    <div>
      {
        users
          ? (
            <Zoom in={true}>
              <ul>
                {users.map(({ username, bio, foto_url }) => (

                  <li key={username}>

                    <div className="conected-list-users">
                      <div className="conected-list-users-photo" style={{ backgroundImage: `url(${foto_url})` }}></div>
                      <div className="info-user">
                        <span className="conected-list-user-name">{username}</span>
                        <span className="conected-list-user-description">{bio}</span>
                      </div>
                      <div className="info-status">
                        <FaCircle size={10} color={"green"} className="status-circle" />

                      </div>
                    </div>
                    <div className="linha"></div>
                  </li>

                ))}
              </ul>
            </Zoom>
          )
          : null
      }
    </div>
  );
}

