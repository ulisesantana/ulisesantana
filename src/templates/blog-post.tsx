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
  const post = props.data.markdownRemark
  const {edges} = props.data.allMarkdownRemark
  const slug = post.fields.slug
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const shareUrl = `${siteUrl}${slug}`
  const title = post.frontmatter.title
  const metaTags = post.frontmatter.tags == null ? '' : post.frontmatter.tags.join(',')
  const [metaDate] = post.frontmatter.date.split('T')
  const metaImage = `${siteUrl}${post.frontmatter.cover.childImageSharp.fluid.src}`

  return (
    <SpanishLayout>
      <SEO
        title={title}
        description={post.frontmatter.description || post.excerpt}
        meta={[
          {property: 'og:type', content: 'article'},
          {property: 'article:author', content: siteUrl},
          {property: 'article:published_time', content: metaDate},
          {property: 'article:section', content: 'Technology'},
          {property: 'article:tag', content: metaTags},
          {property: 'og:image', content: metaImage},
          {property: 'og:url', content: shareUrl},
          {property: 'twitter:domain', content: siteUrl},
          {property: 'twitter:image', content: metaImage},
          {property: 'twitter:url', content: shareUrl},
        ]}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.frontmatter.title}
          date={DateHelper.toHuman(post.frontmatter.date)}
          preview={
            post.frontmatter.cover == null
              ? null
              : post.frontmatter.cover.childImageSharp.fluid
          }
          description={post.html}
          timeToRead={post.timeToRead}
          imagePosition="top"
        />
        <Intro lang="es"/>
        <BlogPostFooter
          className={post.frontmatter.cover == null ? "center" : ""}
        >
          {post.frontmatter.tags == null ? null : (
            <PostTags className="post_tags">
              {post.frontmatter.tags.map((tag: string, index: number) => (
                <a key={index} href={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </a>
              ))}
            </PostTags>
          )}
          <PostShare>
            <span>Comparte esta entrada:</span>
            <FacebookShareButton url={shareUrl} quote={post.frontmatter.title}>
              <IoLogoFacebook/>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={post.frontmatter.title}>
              <IoLogoTwitter/>
            </TwitterShareButton>
            <PinterestShareButton
              url={shareUrl}
              media={`${
                post.frontmatter.cover == null
                  ? null
                  : post.frontmatter.cover.childImageSharp.fluid
              }`}
            >
              <IoLogoPinterest/>
            </PinterestShareButton>
            <RedditShareButton
              url={shareUrl}
              title={`${post.frontmatter.title}`}
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
            {edges.map(({node}: any) => (
              <RelatedPostItem key={node.fields.slug}>
                <PostCard
                  title={node.frontmatter.title || node.fields.slug}
                  url={node.fields.slug}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  tags={node.frontmatter.tags}
                />
              </RelatedPostItem>
            ))}
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date
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
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { nin: $draftDisabledList }, tags: { in: $tag } }
        fields: { slug: { ne: $slug } }
      }
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
                fluid(maxWidth: 480, maxHeight: 285, quality: 90) {
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
