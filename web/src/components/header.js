import React from 'react'
import Icon from './icons'

import styles from './header.module.css'

const Header = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <img className={styles.headshot} src='https://placehold.it/100x100' />
      <h1 className={styles.branding}>
        <span className={styles.firstName}>Timothy</span> Hanaoka
      </h1>

      <ul className={styles.contactInfo}>
        <li>
          <a className={styles.contactLink} href='#'><Icon symbol='phone' /> <span className={styles.label}>310.525.9584</span></a>
        </li>
        <li>
          <a className={styles.contactLink} href='#'><Icon symbol='email' /> <span className={styles.label}>tim@hanaoka.co</span></a>
        </li>
        <li>
          <a className={styles.contactLink} href='#'><Icon symbol='document' /> <span className={styles.label}>Resume</span></a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
