import React from 'react'
import Channels from './Channels/Channels'
import Podcasts from "./Podcasts/Podcasts"

const Kayana = () => {
  return (
    <>
      <div className='container'>
        <div className="header">
          <img src={require("../assets/kayana.png")} alt="بودكاست كيانا - نوى ميديا" />
          <div>
            <h1>بودكاست كيانــا</h1>
            <p>
            يناقش بودكاست كيانا  التأثيرات السلبية للتغير المناخي في مصر  و يستعراض التأثيرات البيئية والاقتصادية والاجتماعية لتغير المناخ وأهمية التصدي لهذا التحدي العالمي.
            </p>
          </div>
        </div>
        <Channels position="minor"/>
      </div>
      <Podcasts query='kayana' />
    </>
  )
}
export default Kayana
