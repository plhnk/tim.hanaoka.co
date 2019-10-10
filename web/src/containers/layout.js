import { graphql, StaticQuery } from 'gatsby'
import React, { useState } from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings {
      title
    }
    myInfo: sanityMyInfo {
      firstName
      lastName
      shortName
      address1
      address2
      zipCode
      phone
      email
      city
      country
    }
  }
`

function LayoutContainer (props) {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        if (!data.myInfo) {
          throw new Error(
            'Missing "My Info". Open the studio at http://localhost:3333 and add "My Info" data'
          )
        }
        return (
          <Layout
            {...props}
            showNav={showNav}
            myInfo={data.myInfo}
            siteTitle={data.site.title}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
