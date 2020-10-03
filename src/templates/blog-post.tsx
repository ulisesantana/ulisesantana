import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"
import { DiscussionEmbed } from "disqus-react"
import { SpanishLayout } from "../components"
import {SEO} from "../components"
import PostCard from "../components/PostCard/PostCard"
import PostDetails from "../components/PostDetails/PostDetails"
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
} from "react-share"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoReddit,
} from "react-icons/io"
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  PostTags,
  BlogPostComment,
} from "./templates.style"
import Intro from "../containers/Intro"

const BlogPostTemplate = (props: any) => {
  const post = props.data.markdownRemark
  const { edges } = props.data.allMarkdownRemark
  const { lang } = props.pageContext
  const title = post.frontmatter.title
  const slug = post.frontmatter.slug
    const shareUrl = window.location

  const disqusConfig = {
    shortname: process.env.DISQUS_NAME,
    config: { identifier: slug, title },
  }
  return (
    <SpanishLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          preview={
            post.frontmatter.cover == null
              ? null
              : post.frontmatter.cover.childImageSharp.fluid
          }
          description={post.html}
          imagePosition="top"
        />
        <Intro lang="es" />
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
            <FacebookShareButton
              url={shareUrl}
              quote={post.frontmatter.title}
            >
              <IoLogoFacebook />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={post.frontmatter.title}
            >
              <IoLogoTwitter />
            </TwitterShareButton>
            <PinterestShareButton
              url={shareUrl}
              media={`${
                post.frontmatter.cover == null
                  ? null
                  : post.frontmatter.cover.childImageSharp.fluid
              }`}
            >
              <IoLogoPinterest />
            </PinterestShareButton>
            <RedditShareButton
              url={shareUrl}
              title={`${post.frontmatter.title}`}
            >
              <IoLogoReddit />
            </RedditShareButton>
          </PostShare>
        </BlogPostFooter>
        <BlogPostComment
          className={post.frontmatter.cover == null ? "center" : ""}
        >
          <DiscussionEmbed {...disqusConfig} />
        </BlogPostComment>
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>
            Artículos relacionados
          </RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => (
              <RelatedPostItem key={node.frontmatter.slug}>
                <PostCard
                  title={node.frontmatter.title || node.frontmatter.slug}
                  url={node.frontmatter.slug}
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
  query BlogPostBySlug($slug: String!, $tag: [String!]) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        description
        tags
        slug
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
        frontmatter: { tags: { in: $tag } }
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
            slug
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