import React from 'react'

const strokeStyle = { vectorEffect: 'non-scaling-stroke', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }

const EmailIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    width='1em'
    height='1em'
  >
    <path d='M22 6l-10 7L2 6' stroke='currentColor' style={strokeStyle} />
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' stroke='currentColor' style={strokeStyle} />
  </svg>
)

export default EmailIcon
