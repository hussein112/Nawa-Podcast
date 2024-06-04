import React from 'react'
import LoadingIcons from 'react-loading-icons'

const CommingSoon = ({title}) => {
  return (
    <div className='comming-soon'>
      <p className='page-title'>{title}</p>
      <LoadingIcons.BallTriangle stroke="#016677" />
    </div>
  )
}

export default CommingSoon
