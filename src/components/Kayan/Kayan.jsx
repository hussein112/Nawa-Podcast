import React, { useEffect, useState } from 'react'
import Channels from '../Channels/Channels'
import "./Kayan.css"
import Podcasts from "../Podcasts/Podcasts"

const Kayan = () => {
  useEffect(() => {
    
  });
  return (
    <>
      <div className='container'>
        <div className="header">
          <img src={require("../../assets/kayan.png")} alt="بودكاست كيان - نوى ميديا" />
          <div>
            <h1>بودكاست كيان</h1>
            <p>من خلال بودكاست "كيان"  نناقش الهوية السورية  من وجهة النظر الشخصية ومما قرأه أو شاهده السوريين في المهجر و في الداخل </p>
          </div>
        </div>
        <Channels position="minor"/>
      </div>
      <Podcasts query='kayan' />
    </>
  )
}

export default Kayan
