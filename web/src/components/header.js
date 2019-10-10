import React from 'react'
import Icon from './icons'
import Link from './link.js'

import styles from './header.module.css'

const Header = ({ myInfo }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <img className={styles.headshot} src='https://placehold.it/100x100' />
      <Link to='/' className={styles.branding}>
        <h1>{myInfo.name}</h1>
      </Link>

      <ul className={styles.contactInfo}>
        <li>
          <a className={styles.contactLink} href={'tel:' + `${myInfo.phone}`}>
            <Icon symbol='phone' /> <span className={styles.label}>{myInfo.phone}</span>
          </a>
        </li>
        <li>
          <a className={styles.contactLink} href={'mailto:' + `${myInfo.email}`}>
            <Icon symbol='email' /> <span className={styles.label}>{myInfo.email}</span>
          </a>
        </li>
        <li>
          <a className={styles.contactLink} href='/resume'>
            <Icon symbol='document' /> <span className={styles.label}>Resume</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
