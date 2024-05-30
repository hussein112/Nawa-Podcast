import React from 'react'
import "./Channels.css"


const Channels = ({position}) => {
  return (
    <div className={position === "minor" ? "podcast-channels minor" : "podcast-channels"}>
        <a href="#" className='youtube p-icon'>
        </a>
        <a href="#" className='soundcloud p-icon'>
        </a>
        <a href="#" className='podcast p-icon'>
        </a>
        <a href="#" className='google p-icon'>
        </a>
        <a href="#" className='castbox p-icon'>
        </a>
    </div>
  )
}

export default Channels
