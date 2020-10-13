const path = require(`path`)
const _ = require('lodash')
const {createFilePath} = require(`gatsby-source-filesystem`)

const createPostHandler = (createPage) => (post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const slug = post.node.frontmatter.slug || post.node.fields.slug;

    createPage({
        path:  slug,
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
            draftDisabledList: process.env.NODE_ENV === `production` ? [true] : [],
            slug,
            previous,
            next,
            tag: post.node.frontmatter.tags
        },
    })
}

const createPostListHandler = (createPage, postsPerPage, numPages) => (_, i) => {
    createPage({
        path: i === 0 ? `/blog` : `/page/${i + 1}`,
        component:  path.resolve(`./src/templates/blog-list.tsx`),
        context: {
            draftDisabledList: process.env.NODE_ENV === `production` ? [true] : [],
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
        },
    })
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    const tagTemplate = path.resolve(`./src/templates/tags.tsx`)

    return graphql(
        `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                cover {
                  childImageSharp {
                    fluid {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                    }
                  } 
                }
              }
            }
          }
        }
      }
    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(createPostHandler(createPage))

        // Create blog post list pages
        const postsPerPage = 5
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({length: numPages}).forEach(createPostListHandler(createPage, postsPerPage, numPages))

        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    tag,
                },
            })
        })

        return null
    })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode})
        if (typeof node.frontmatter.slug !== 'undefined') {
            createNodeField({
                node,
                name: 'slug',
                value: node.frontmatter.slug,
            })
        } else {
            const value = createFilePath({node, getNode})
            createNodeField({
                node,
                name: 'slug',
                value,
            })
        }
    }
}

// for React-Hot-Loader: react-🔥-dom patch is not detected
exports.onCreateWebpackConfig = ({getConfig, stage}) => {
    const config = getConfig()
    if (stage.startsWith('develop') && config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom',
        }
    }
}
