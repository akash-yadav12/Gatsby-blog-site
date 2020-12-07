import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"


import Layout from "../components/layout"

// const extScript = require('../../myscript.js')


const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{minHeight:`90vh`}}>
        {data.allMarkdownRemark.edges.map(post => (
            <div className="cards" key = { post.node.id} 
                style={{
                    border:`1px solid rgba(0,0,0,.2)`,
                    boxShadow:`1px 1px 2px rgba(0,0,0,.4)`,
                    margin: `25px auto`,
                    padding: `20px 40px`
                    
                }}
            >
                <h1 className="Font-weight-bold">{post.node.frontmatter.title}</h1>
                <p className="text-truncate">{post.node.excerpt}</p>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br/>
                <br/>
                <Link to={post.node.frontmatter.path}>Read more</Link>
            </div>
        ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
    query BlogPosts {
        allMarkdownRemark(sort: {fields: [frontmatter___date],order:DESC}){
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date(formatString: "MMM DD,YYYY")
                        author
                    }
                    excerpt
                }
            }
        }
    }
`
export default BlogPage



