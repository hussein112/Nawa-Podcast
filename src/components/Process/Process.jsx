import React from 'react'

const Process = () => {
  return (
    <div className="process">
        <div className="step">
            <img src={require("../../assets/step-1.png")} alt="" />
            <h2>تحديد و جمع</h2>
        </div>
        <div className="step">
            <img src={require("../../assets/step-2.png")} alt="" />
            <h2>المعالجة</h2>
        </div>
        <div className="step">
            <img src={require("../../assets/step-3.png")} alt="" />
            <h2>تحليل العملية</h2>
        </div>
        <div className="step">
            <img src={require("../../assets/step-4.png")} alt="" />
            <h2>نشر</h2>
        </div>
    </div>
  )
}

export default Process
