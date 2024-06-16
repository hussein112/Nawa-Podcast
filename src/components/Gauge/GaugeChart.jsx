import React, { useState, useEffect} from "react";


const GaugeChart = ({ value, min = 0, max = 100, segments = ['صحيح', 'أغلبه صحيح', 'أعلبه خاطئ', 'خاطئ', 'بيع كلام'] }) => {
    const [currentValue, setCurrentValue] = useState(min);
  
    useEffect(() => {
      const animationDuration = 1000; // ms
      const steps = 60; // 60 fps
      const stepValue = (value - currentValue) / steps;
      let currentStep = 0;
  
      const interval = setInterval(() => {
        if (currentStep < steps) {
          setCurrentValue(prevValue => prevValue + stepValue);
          currentStep++;
        } else {
          setCurrentValue(value);
          clearInterval(interval);
        }
      }, animationDuration / steps);
  
      return () => clearInterval(interval);
    }, [value, currentValue]);
  
  
  
    
  const percentage = (currentValue - min) / (max - min) * 100;
  const rotation = 90 - (percentage * 1.8);

  const segmentAngle = 180 / segments.length;
  const outerRadius = 100;
  const innerRadius = 60; // This controls the thickness of the arcs
  const center = { x: 100, y: 100 };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees + 180) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }

  return (
    <svg viewBox="0 0 200 120" className="gauge-chart">
      {/* Colored Segments */}
      {segments.map((segment, index) => {
        const startAngle = index * segmentAngle;
        const endAngle = (index + 1) * segmentAngle;
        const outerArc = describeArc(center.x, center.y, outerRadius, startAngle, endAngle);
        const innerArc = describeArc(center.x, center.y, innerRadius, endAngle, startAngle);
        let color;
        switch(segment){
          case 'صحيح':
            color = "#016e7e";
            break;
          case 'أغلبه صحيح':
            color = "#538c97";
            break;
          case 'أعلبه خاطئ':
            color = "#efd3d1";
            break;
          case 'خاطئ':
            color = "#de9b97";
            break;
          case 'بيع كلام':
            color = "#d8847f";
            break;
        }
        return (
          <path
            key={segment}
            d={`${outerArc} L ${innerArc.split(" ").slice(1).join(" ")} Z`}
            fill={color}
            stroke="white"
            strokeWidth="1"
          />
        );
      })}

      {/* Segment Labels */}
      {segments.map((segment, index) => {
      const angle = 180 - segmentAngle * (index + 0.5);
      const labelRadius = (outerRadius + innerRadius) / 2;
      const position = polarToCartesian(center.x, center.y, labelRadius, angle);
      const words = segment.split(' ');
      return (
        <text
          key={segment}
          x={position.x}
          y={position.y}
          textAnchor="middle"
          fontSize="10"
          fill="white"
          dominantBaseline="central"
        >
          {words.map((word, i) => (
            <tspan
              key={i}
              x={position.x}
              dy={i === 0 ? word === 'أغلبه' || word === 'بيع' ? '0.01em' : '0.1em' : word === 'كلام' || word === 'خاطئ' || word === 'صحيح' ? '1.1em' : '0.3em'}
            >
              {word}
            </tspan>
          ))}
        </text>
      );
    })}

      {/* Needle */}
      <g transform={`rotate(${rotation}, ${center.x}, ${center.y})`}>
        <path d={`M${center.x} ${center.y} L${center.x} ${center.y - outerRadius + 10}`} strokeWidth="2" stroke="black" />
        <circle cx={center.x} cy={center.y} r="5" fill="black" />
      </g>
    </svg>
    );
  };


export default GaugeChart;