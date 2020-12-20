import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import AdSense from 'react-adsense';    
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import Img from 'gatsby-image';

import "./index.css";


const BlogPage = ({data}) => {

    const [allMarkdownRemark,setAllMarkdownRemark ] = useState(data.allMarkdownRemark.edges)
	const search = (event) => {
		const searchString = event.target.value.toLowerCase().trim();
		const filteredData  = data.allMarkdownRemark.edges.filter((edge) => {
			return edge.node.frontmatter.title.toLowerCase().includes(searchString)
		})
		setAllMarkdownRemark(filteredData);
    }

    return(

    <Layout>
        <Helmet>
            <meta property="og:image" content=""/>
            <meta property="og:locale" content=""/>
            <link rel="canonical" href="{data.site.siteMetadata.url}"/>
        </Helmet>
        <SEO title="Blogs" />
        <div id="search" className="">
            <input type="text" placeholder="Search" onChange={(event) =>{ search(event)}} />
            <div className="icon"> <i class="fas fa-search"></i> </div>
        </div>
        <div style={{minHeight:`90vh`}}>
            {allMarkdownRemark.map(post => (
                <div className="cards" id="data-card" key = { post.node.id} 
                    style={{
                    }}
                >
                    <Img fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}  style={{ width: `400px`, maxWidth:`80%`, position:`relative`, left:`50%`, transform:`translateX(-50%)`, margin:`20px 0`, boxShadow:`2px 2px 8px 2px rgba(0,0,0,.4)`}}/>
                    <h1 className="Font-weight-bold">{post.node.frontmatter.title}</h1>

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
    );
}

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

