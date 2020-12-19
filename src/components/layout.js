/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {images} from "../../blog-posts/2020-12-06-post-04/images"


import "./layout.css"

// const extScript = require('../../myscript.js')


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="container" style={{margin:`20px auto`}}>{children}</main>
        <footer style={{
          marginTop: `2rem`,
          position: `relative`,
          bottom:`0`,
          background:`#333`,
          padding:`20px`,
          textAlign:`center`,
          color:`#fff`
        }}>
          All right reserved © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" className="text-white">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
