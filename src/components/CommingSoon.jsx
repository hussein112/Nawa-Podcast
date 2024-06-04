import React from 'react'
import LoadingIcons from 'react-loading-icons'

const CommingSoon = () => {
  return (
    <div className='comming-soon'>
      <p className='page-title'>المؤشر قريباً</p>
      <LoadingIcons.BallTriangle stroke="#016677" />
    </div>
  )
}

export default CommingSoon
