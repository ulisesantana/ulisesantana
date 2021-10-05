import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {TWITTER_USERNAME} from "../constants";

type Meta = { name: string; content: string; property?: undefined; } |
{ property: string; content: string; name?: undefined; }

type SEOProps = {
  description?: string
  lang?: string
  meta?: Meta[]
  keywords?: any
  title: string
}

export const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta = [] as Meta[],
  keywords,
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            about
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.about
  const metaTitle = `${title} | Ulises Santana`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:site`,
          content: TWITTER_USERNAME,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'msapplication-TileColor',
          content: '#F7E018'
        },
        {
          name: 'theme-color',
          content: '#F7E018'
        },
        {
          name: 'msapplication-navbutton-color',
          content: '#F7E018'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: '#F7E018'
        }
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  keywords: [],
  description: ``,
}
