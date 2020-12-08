import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import './style.css'

export default function Template({data}){
    const post = data.markdownRemark

    return (
        <Layout>
            <div className="card" id="article">
                <div className="card-header">
                    <h2 className="text-center">{post.frontmatter.title}</h2>
                </div>
                <div className="card-body">
                    <div dangerouslySetInnerHTML = {{ __html: post.html }}></div>
                </div>
                <footer class="blockquote-footer ml-auto p-4">by <cite title="Source Title">{post.frontmatter.author} on {post.frontmatter.date}</cite></footer>
            </div>
            {/* <Link to="/">View All Blogs</Link> */}
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
            }
        }
    }
`