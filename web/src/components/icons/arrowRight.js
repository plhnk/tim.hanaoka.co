import React from 'react'

const strokeStyle = { vectorEffect: 'non-scaling-stroke', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }

const arrowRight = ({ className }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    width='1em'
    height='1em'
    style={{ marginBottom: '.2em' }}
  >
    <path d='M4 12H20' stroke='currentColor' style={strokeStyle} />
    <path d='M14 6L20 12L14 18' stroke='currentColor' style={strokeStyle} />
  </svg>
)

export default arrowRight
