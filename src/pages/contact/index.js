import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
// import './index.styl'

import { Layout } from '../../components/Layout'
import { rhythm } from '../../utils/typography'

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description

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
        <section className={`Contact`}>
          If you want anything from me (except money or free work) just tell me
          on <a href="https://www.twitter.com/ulisesantana" target="_blank">twitter</a>.
        </section>
      </Layout>
    )
  }
}

export default Contact

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
