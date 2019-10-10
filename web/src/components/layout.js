import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Container from '../components/container'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, myInfo, onHideNav, onShowNav, showNav }) => (
  <>
    <Helmet>
      <link
        href='https://fonts.googleapis.com/css?family=Alegreya:400,400i,500,500i,700,700i|Work+Sans:400,500,600,700,800&display=swap'
        rel='stylesheet'
      />
      />
    </Helmet>
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Header myInfo={myInfo} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to='/'>Projects</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
            <li>
              <Link to='/contact/'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.body}>
        {children}
        <Container extraClass={styles.footerContainer}>
          <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
              <div className={styles.siteInfo}>
                <div>
                  Copyright © {new Date().getFullYear()} {myInfo.name}.
                  All&nbsp;rights&nbsp;reserved.
                </div>
                <div>
                  Built by <a href='https://paul.hanaoka.co'>Big Brother</a> with&nbsp;{''}
                  <a href='https://www.sanity.io'>Sanity</a>&nbsp;&amp;&nbsp;{``}
                  <a href='https://www.gatsbyjs.org'>Gatsby</a>.
                </div>
              </div>
            </div>
          </footer>
        </Container>
      </div>
    </div>
  </>
)

export default Layout
