import React from 'react'
import Icon from './icons'
import Link from './link.js'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import { useMediaQuery } from 'react-responsive'

import styles from './header.module.css'

const Header = ({ myInfo, smallNav }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (

    <div className={isTabletOrMobile && smallNav ? styles.mobileSmallNav : styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.headshotWrapper}>
          <img
            src={imageUrlFor(buildImageObj(myInfo.headshot))
              .width(160)
              .height(160)
              .fit('crop')
              .url()}
            alt={myInfo.headshot.alt}
            className={styles.headshot}
          />
        </div>
        <Link to='/' className={styles.branding}>
          <h1>
            <span className={styles.firstName}>{isTabletOrMobile && smallNav ? myInfo.shortName : myInfo.firstName}</span>
            {myInfo.lastName}
          </h1>
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
}
export default Header
