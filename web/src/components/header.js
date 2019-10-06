import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </h1>

      <div>
        <Icon symbol='phone' />
        <Icon symbol='email' />
        <Icon symbol='document' />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/projects/'>Projects</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
