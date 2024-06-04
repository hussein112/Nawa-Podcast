import React from 'react'
import Channels from './Channels/Channels'
import Podcasts from "./Podcasts/Podcasts"

const Ozone = () => {
  return (
    <>
      <div className='container'>
        <div className="header">
          <img src={require("../assets/kayana.png")} alt="بودكاست أوزون - نوى ميديا" />
          <div>
            <h1>بودكاســت أوزون</h1>
            <p>
            يطرح بودكاست أوزون  قضايا التغيّر المناخي في لبنان ويناقش الحلول انطلاقًا من المشاكل وانعكاسها على الحياة البشرية.
            </p>
          </div>
        </div>
        <Channels position="minor"/>
      </div>
      <Podcasts query='ozone' />
    </>
  )
}
export default Ozone
