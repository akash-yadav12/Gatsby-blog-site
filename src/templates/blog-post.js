import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import './style.css';
import Helmet from 'react-helmet';
import SEO from '../components/seo';
import Img from 'gatsby-image';

export default function Template({data}){
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title= {post.frontmatter.title}/>
            <Helmet>
                <meta property="og:title" content={post.frontmatter.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content=""/>
                <meta property="og:locale" content=""/>
                <meta property="og:url" content={post.frontmatter.path}/>
                <link rel="canonical" href={post.frontmatter.path}/>
            </Helmet>
            <div className="card" id="article">
                <div className="card-header">
                    <h2 className="text-center">{post.frontmatter.title}</h2>
                </div>
                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                <div className="card-body">
                    <div dangerouslySetInnerHTML = {{ __html: post.html }}></div>
                </div>
                <footer class="blockquote-footer ml-auto p-4">by <cite title="Source Title">{post.frontmatter.author} on {post.frontmatter.date}</cite></footer>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter{
                path
                title
                author
                date(formatString: "MMM DD, YYYY")
                featuredImage{
                    childImageSharp {
                        fluid(maxWidth: 400) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`