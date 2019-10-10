import React from 'react'

import styles from './container.module.css'

const Container = ({ children, extraStyle }) => {
  return <div className={styles.root} style={extraStyle}>{children}</div>
}

export default Container
