import React from 'react'
import styles from './container.module.css'

const Container = ({ children, inlineStyle, extraClass }) => {
  return <div className={`${styles.root} ${extraClass || null}`} style={inlineStyle}>{children}</div>
}

export default Container
