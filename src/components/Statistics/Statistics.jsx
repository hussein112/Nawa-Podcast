import React from 'react'
import Result from '../Result'


const Statistics = ({data, loading}) => {
  return (
    <div className="container results-container">
      {loading ? <div id="loading-icon"></div> : data.map(data => (
        <Result progress={Math.round(data.subResult)} result={data.result} subResult={data.total + ' تم التحقق منه'} />
      ))}
      {/* <Result progress={20} result='صحيح' subResult='230 تم التحقق منه' />
      <Result progress={30} result='صحيح' subResult='230 تم التحقق منه' />
      <Result progress={40} result='صحيح' subResult='230 تم التحقق منه' />
      <Result progress={50} result='صحيح' subResult='230 تم التحقق منه' /> */}
    </div>
  )
}

export default Statistics
