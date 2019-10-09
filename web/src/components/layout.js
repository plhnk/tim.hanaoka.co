import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Container from '../components/container'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav }) => (
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
        <Header onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      </div>
      <div className={styles.navContainer}>
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
      <div className={styles.body}>
        {children}
        <Container>
          <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
              <div className={styles.companyAddress}>
                {companyInfo && (
                  <div>
                    {companyInfo.zipCode} {companyInfo.city}
                    {companyInfo.country && <span>, {companyInfo.country}</span>}
                  </div>
                )}
              </div>

              <div className={styles.siteInfo}>
                © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
                &amp;
                {` `}
                <a href='https://www.gatsbyjs.org'>Gatsby</a>
              </div>
            </div>
          </footer>
        </Container>
      </div>
    </div>
  </>
)

export default Layout
