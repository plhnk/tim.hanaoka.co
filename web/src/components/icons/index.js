import React from 'react'
import HamburgerIcon from './hamburger'
import PhoneIcon from './phone'
import EmailIcon from './email'
import DocumentIcon from './document'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'phone':
      return <PhoneIcon />
    case 'email':
      return <EmailIcon />
    case 'document':
      return <DocumentIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
