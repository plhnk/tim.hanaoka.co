import React from 'react'

const strokeStyle = { vectorEffect: 'non-scaling-stroke', strokeWidth:'2', strokeLinecap: 'round', strokeLinejoin: 'round' }

const PhoneIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    width='1em'
    height='1em'
  >
    <path d='M21 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z' stroke='currentColor' style={strokeStyle} />
  </svg>
)

export default PhoneIcon
