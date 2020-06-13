import { useStaticQuery, graphql } from "gatsby"

export const useSpanishBlogPosts = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage(filter: { path: { eq: "/page/1" } }) {
        nodes {
          context {
            numPages
            currentPage
          }
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { langKey: { eq: "es" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              langKey
              cover {
                childImageSharp {
                  fluid(maxWidth: 325, maxHeight: 325, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
