import React from "react"
import {Layout} from "../components"
import {SEO} from "../components"
import CVPage from "../containers/CVPage"
import {graphql} from "gatsby"

type CVProps = {}

const CV: React.FunctionComponent<CVProps> = (props: any) => {
  const {siteUrl, description} = props.data.site.siteMetadata
  const metaImage = `${siteUrl}${props.data.avatar.childImageSharp.fluid.src}`

  return (
    <Layout menu={false}>
      <SEO
        description={description}
        title="Ulises Santana | JavaScript Engineer"
        meta={[
          {property: `og:type`, content: `profile`},
          {property: `profile:first_name`, content: `Ulises`},
          {property: `profile:last_name`, content: `Santana`},
          {property: `profile:username`, content: `ulisesantana`},
          {property: `profile:gender`, content: `male`},
          {property: 'og:image', content: metaImage},
          {property: 'og:url', content: siteUrl},
          {property: 'og:image:width', content: '1515'},
          {property: 'og:image:height', content: '1452'},
          {property: 'twitter:domain', content: siteUrl},
          {property: 'twitter:image', content: metaImage},
        ]}
      />
      <CVPage/>
    </Layout>
  )
}

export default CV

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
     avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
  }
`
