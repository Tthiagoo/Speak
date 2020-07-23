import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import './styles.css'





export default function Tab({ room }) {
  return (

    <div className="TabContainer">

      <div className="leftInnerContainer">
        <div className="tabItem">
          <h5>{room}</h5>
        </div>
      </div>
      <div className="rightInnerContainer">
        <FaTimesCircle size={19} color={"white"} id="FaTimesCircle" />
      </div>
    </div>



  )
} 