import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Template({data}){
    const post = data.markdownRemark

    return (
        <Layout>
            <div className="card" style={{minHeight:`90vh`, width:`90%`,margin:`auto`,boxShadow: `0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)`,background:`#fff`}}>
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