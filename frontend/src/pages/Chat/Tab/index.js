import React from 'react'
import { FaTimesCircle, FaCircle } from 'react-icons/fa'
import './styles.css'





export default function Tab({room}) {
  return (
    <div>
      <div className="TabContainer">
        <div className="leftInnerContainer">
          <div className="tabItem">
            <h5>{room}</h5>
          </div>
        </div>
      </div>
    </div>


  )
} 