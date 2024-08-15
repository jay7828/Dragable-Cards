import React from 'react';

const Arrow = ({ start, end }) => {
  // Calculate the coordinates for the arrow
  const x1 = start.x - 80 || 0;
  const y1 = start.y || 0;
  const x2 = end.x + 150 || 0;
  const y2 = end.y + 200 || 0;

  return (
    <svg
      style={{ 
        zIndex: 10, 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', 
        width: '100%', 
        height: '100%', 
        overflow: 'visible' 
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="100 -200 1000 1000" 
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="0"
          refY="3"
          orient="auto"
          fill="black"
        >
          <polygon points="0 0, 10 3, 0 6" />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="black"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default Arrow;
