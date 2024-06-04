import React from 'react'
import Channels from './Channels/Channels'
import Podcasts from "./Podcasts/Podcasts"

const Anbar = () => {
  return (
    <>
      <div className='container'>
        <div className="header">
          <img src={require("../assets/kayana.png")} alt="بودكاست العنبر - نوى ميديا" />
          <div>
            <h1>العنبــر</h1>
            <p>
                العنبر رقم 12  يروي قصص المتضررين من الانفجار الذي وقع يوم الرابع من آب 2020 عند الساعة 6:07 في مرفأ بيروت، والألم الذي عاشوه والخسائر المادية والجسدية والنفسية التي مُنيوا بها عقب المصيبة.
            </p>
          </div>
        </div>
        <Channels position="minor"/>
      </div>
      <Podcasts query='anbar' />
    </>
  )
}
export default Anbar
