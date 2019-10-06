import React from 'react'

const strokeStyle = { vectorEffect: 'non-scaling-stroke', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }

const DocumentIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    width='1em'
    height='1em'
  >
    <path  d='M14 2v6h6M9 15h6' stroke='currentColor' style={strokeStyle} />
    <path   d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z' stroke='currentColor' style={strokeStyle} />
  </svg>
)

export default DocumentIcon
