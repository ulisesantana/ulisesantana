import { useStaticQuery, graphql } from "gatsby"

export function userIntroInfo() {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED,
            placeholder: TRACED_SVG, 
            transformOptions: {cropFocus: CENTER}, 
            width: 200, 
            height: 200, 
            quality: 100
          ) 
        }
      }
      easter: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED,
            placeholder: TRACED_SVG, 
            transformOptions: {cropFocus: CENTER}, 
            width: 200, 
            height: 200, 
            quality: 100
          ) 
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
