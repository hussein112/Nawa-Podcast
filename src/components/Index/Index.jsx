import React, {useState} from 'react'
import AboutParagraph from '../AboutParagraph/AboutParagraph'
import Method from '../Method/Method'
import "./Index.css"
import Scale from '../Scale'
import ClimateScale from '../ClimateScale'
import CommingSoon from '../CommingSoon'
import Result from '../Result'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const [passData, setPassData] = useState();
  console.log("Pass Data: " + passData);
  const navigate = useNavigate();
  return (
    // <CommingSoon title="المؤشر قريباً" />
    <div className='index'>
        <div className="container">
            <AboutParagraph />
            <div className="waves"></div>
            <Method />
        </div>
        <Scale setPassData={setPassData}/>
        <ClimateScale />
        <div className='index-link-container'>
          <a onClick={() => navigate("/index/clima-fact", {state: {data: passData}})} className='index-link' href=''>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5352_28)">
              <path d="M22.5025 45.0051C34.9304 45.0051 45.0051 34.9304 45.0051 22.5025C45.0051 10.0747 34.9304 0 22.5025 0C10.0747 0 0 10.0747 0 22.5025C0 34.9304 10.0747 45.0051 22.5025 45.0051Z" fill="#016677"/>
              <path d="M32.8215 29.616V12.8496C32.8215 12.6703 32.7503 12.4985 32.6236 12.3717C32.4969 12.245 32.325 12.1738 32.1458 12.1738H15.3794" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M31.7141 13.3369L12.1787 32.8672" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_5352_28">
              <rect width="45" height="45" fill="white"/>
              </clipPath>
              </defs>
            </svg>
              المؤشر
          </a>
        </div>
        
    </div>
  )
}

export default Index
