import { graphql } from "gatsby"

export const useBlogPosts = () =>
  graphql`
    query BlogListing($draftDisabledList: [Boolean!]!) {
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
      allMdx(
        filter: { frontmatter: { draft: { nin: $draftDisabledList } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            slug
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
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
  `
