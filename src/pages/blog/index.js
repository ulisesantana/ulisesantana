import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import './index.styl'

import { Layout } from '../../components/Layout'
import { rhythm } from '../../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        menu={data.site.siteMetadata.menu}
      >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {/*{JSON.stringify(data.site.siteMetadata, null, 2)}*/}
        <div className="post-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className={`post-card`} key={node.fields.slug}>
                <time dateTime={node.frontmatter.date}>
                  <h5>
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h5>
                </time>
                <div className="info">
                  <time className={`date`}>{node.frontmatter.date}</time>
                  <small className={`time-to-read`}>{node.timeToRead} min</small>
                </div>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        menu {
          section
          path
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
