import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Helmet>
      <link href='https://fonts.googleapis.com/css?family=Alegreya:400,400i,500,500i,700,700i|Work+Sans:400,500,700,800&display=swap' rel='stylesheet' />
      />
    </Helmet>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>

        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
