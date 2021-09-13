import React from "react"
import {graphql} from "gatsby"
import _ from "lodash"
import {SEO, SpanishLayout} from "../components"
import PostCard from "../components/PostCard/PostCard"
import PostDetails from "../components/PostDetails/PostDetails"
import {FacebookShareButton, PinterestShareButton, RedditShareButton, TwitterShareButton,} from "react-share"
import {IoLogoFacebook, IoLogoPinterest, IoLogoReddit, IoLogoTwitter,} from "react-icons/io"
import {
  BlogPostDetailsWrapper,
  BlogPostFooter,
  PostShare,
  PostTags,
  RelatedPostItem,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostWrapper,
} from "./templates.style"
import Intro from "../containers/Intro"
import {DateHelper} from "../dateHelper";

const BlogPostTemplate = (props: any) => {
  const {edges} = props.data.allMdx
  const {slug, frontmatter, excerpt, timeToRead, body: post} = props.data.mdx
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const shareUrl = `${siteUrl}/${slug}`
  const title = frontmatter.title
  const metaTags = frontmatter.tags == null ? '' : frontmatter.tags.join(',')
  const [metaDate] = frontmatter.date.split('T')
  const metaImage = `${siteUrl}${frontmatter.cover.childImageSharp.fluid.src}`

  return (
    <SpanishLayout>
      <SEO
        title={title}
        description={frontmatter.description || excerpt}
        meta={[
          {property: 'og:type', content: 'article'},
          {property: 'article:author', content: siteUrl},
          {property: 'article:published_time', content: metaDate},
          {property: 'article:section', content: 'Technology'},
          {property: 'article:tag', content: metaTags},
          {property: 'og:image', content: metaImage},
          {property: 'og:url', content: shareUrl},
          {property: 'og:image:width', content: '1301'},
          {property: 'og:image:height', content: '653'},
          {property: 'twitter:domain', content: siteUrl},
          {property: 'twitter:image', content: metaImage},
          {property: 'twitter:url', content: shareUrl},
        ]}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={frontmatter.title}
          date={DateHelper.toHuman(frontmatter.date)}
          preview={
            frontmatter.cover == null
              ? null
              : frontmatter.cover.childImageSharp.fluid
          }
          images={frontmatter.images}
          content={post}
          timeToRead={timeToRead}
          imagePosition="top"
        />
        <Intro lang="es"/>
        <BlogPostFooter
          className={frontmatter.cover == null ? "center" : ""}
        >
          {frontmatter.tags == null ? null : (
            <PostTags className="post_tags">
              {frontmatter.tags.map((tag: string, index: number) => (
                <a key={index} href={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </a>
              ))}
            </PostTags>
          )}
          <PostShare>
            <span>Comparte esta entrada:</span>
            <FacebookShareButton url={shareUrl} quote={frontmatter.title}>
              <IoLogoFacebook/>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={frontmatter.title}>
              <IoLogoTwitter/>
            </TwitterShareButton>
            <PinterestShareButton
              url={shareUrl}
              media={`${
                frontmatter.cover == null
                  ? null
                  : frontmatter.cover.childImageSharp.fluid
              }`}
            >
              <IoLogoPinterest/>
            </PinterestShareButton>
            <RedditShareButton
              url={shareUrl}
              title={`${frontmatter.title}`}
            >
              <IoLogoReddit/>
            </RedditShareButton>
          </PostShare>
        </BlogPostFooter>
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Artículos relacionados</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({node}: any) => {
              return (
                <RelatedPostItem key={node.slug}>
                  <PostCard
                    title={node.frontmatter.title || node.slug}
                    url={`/${node.slug}`}
                    image={node.frontmatter.cover.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                  />
                </RelatedPostItem>
              )
            })}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </SpanishLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $tag: [String!]
    $draftDisabledList: [Boolean!]!
  ) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    mdx( slug: { eq: $slug }) {
      id
      excerpt(pruneLength: 160)
      timeToRead
      body
      slug
      frontmatter {
        title
        date
        images {
          publicURL
        }
        description
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1170, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { nin: $draftDisabledList }, tags: { in: $tag } }
        slug: { ne: $slug }
      }
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 480, maxHeight: 285, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
