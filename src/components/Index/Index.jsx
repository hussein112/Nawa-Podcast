import React, {useState} from 'react'
import AboutParagraph from '../AboutParagraph/AboutParagraph'
import Method from '../Method/Method'
import "./Index.css"
import Scale from '../Scale'
import ClimateScale from '../ClimateScale'
import CommingSoon from '../CommingSoon'

const Index = () => {
  return (
    <CommingSoon title="المؤشر قريباً" />
    // <div className='index'>
    //     <div className="container">
    //         <AboutParagraph />
    //         <div className="waves"></div>
    //         <Method />
    //     </div>
    //     <Scale />
    //     <ClimateScale />
    //     <div className="cs">
    //         <img src={require("../../assets/cs.png")} />
    //         <div className="cs-overlay">
    //             <p>المؤشر قريباً</p>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Index
