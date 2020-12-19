import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import AdSense from 'react-adsense';    
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import Img from 'gatsby-image';

import "./index.css";


const BlogPage = ({data}) => (
  <Layout>
    <Helmet>
        <meta property="og:image" content=""/>
        <meta property="og:locale" content=""/>
        <link rel="canonical" href="{data.site.siteMetadata.url}"/>
    </Helmet>
    <SEO title="Blogs" />
    <div style={{minHeight:`90vh`}}>
        {data.allMarkdownRemark.edges.map(post => (
            <div className="cards" id="data-card" key = { post.node.id} 
                style={{
                }}
            >
                <h1 className="Font-weight-bold">{post.node.frontmatter.title}</h1>
                <Img fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}  style={{ width: `400px`, maxWidth:`80%`, position:`relative`, left:`50%`, transform:`translateX(-50%)`, margin:`20px 0`}}/>
                <p className="text-truncate">{post.node.excerpt}</p>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br/>
                <br/>
                <Link to={post.node.frontmatter.path}>Read more</Link>
            </div>
        ))}
    </div>
    <AdSense.Google
        client='ca-pub-9340385867635764'
        slot='4055218949'
        style={{ display: 'block' }}
        layout='in-article'
        format='fluid'
    />
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
                        featuredImage {
                            childImageSharp {
                              fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
        site{
            siteMetadata{
                title
                description
                keywords
                url
                author
            }
        }
    }
`


  

export default BlogPage



