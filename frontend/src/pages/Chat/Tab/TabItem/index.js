import React from 'react'

import './styles.css'

export default function TabItem({room}) {
  return (
    <div className="leftInnerContainer">
      <div className="tabItem">
        <h5>{room}</h5>
      </div>
    </div>

  )
}
