import { useStaticQuery, graphql } from "gatsby"

export function userIntroInfo() {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 210, height: 210)
        }
      }
      easter: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          gatsbyImageData(width: 210, height: 210)
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const { author } = Data.site.siteMetadata
  const AuthorImage = Data.avatar.childImageSharp.gatsbyImageData
  const Logo = Data.easter.childImageSharp.gatsbyImageData

  return { author, AuthorImage, Logo }
}
