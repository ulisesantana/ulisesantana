require('source-map-support').install()
require('ts-node').register()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ulises Santana`,
    author: `Ulises Santana`,
    about: `Full Stack Developer con JavaScript como lengua materna y la web como patria. Trasteando con tecnologías desde las Islas Canarias 🏝️`,
    description: `Un aprendiz eterno compartiendo sus lecciones aprendidas.`,
    siteUrl: `https://ulisesantana.dev/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "es",
        useLangKeyLayout: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              ordered: true,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              copy: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: "gatsby-remark-external-links"
          }
        ]
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `tracedSVG`,
          quality: 100
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ulises Santana Suárez`,
        short_name: `Ulises Santana`,
        start_url: `/`,
        background_color: `#323330`,
        theme_color: `#f0db4f`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:300, 400, 500, 600, 700`,
          `Fira Sans\:100, 300, 400, 500, 600, 700`
        ]
      }
    }
  ],
}
