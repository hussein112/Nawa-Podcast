import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




const Result = ({progress, result, subResult}) => {
    const gradientStops = [
        { offset: '0%', color: '#C27E78' },
        { offset: '2%', color: '#B77C78' },
        { offset: '10%', color: '#8A7477' },
        { offset: '17%', color: '#676E77' },
        { offset: '24%', color: '#4E6A76' },
        { offset: '31%', color: '#3F6776' },
        { offset: '36%', color: '#3A6676' },
    ];
    
  return (
    <div className='result-container'>
        <GradientSVG stops={gradientStops} idCSS="gradient1" rotation="90" />
        <CircularProgressbarWithChildren 
            counterClockwise={true}
            background="red"
            backgroundPadding={3}
            value={progress}>
            <strong className='percentage'>{progress}%</strong>
        </CircularProgressbarWithChildren>
        <p className="result">{result}</p>
        <p className="sub-result">{subResult}</p>
    </div> 
  )
}

export default Result

const GradientSVG = ({ stops, idCSS, rotation }) => {
    const gradientTransform = `rotate(${rotation})`;
  
    return (
      <svg style={{height: 0, width: 0}}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            {stops.map((stop, index) => (
              <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity || 1} />
            ))}
          </linearGradient>
        </defs>
      </svg>
    );
}