import React from 'react'
import './Avatar.css'
const Avatar = (props) => {
  return (
    <div>
        <img
        className="avatar"
        src={props.url}
        alt={props.name}
      />
    </div>
  )
}

export default Avatar