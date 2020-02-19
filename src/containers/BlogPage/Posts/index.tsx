import * as React from "react"
import PostCardMinimal from "../../../components/PostCardMinimal/PostCardMinimal"
import Pagination from "../../../components/Pagination/Pagination"
import BlogPostsWrapper, { SecTitle } from "./style"
import en from "../../../locales/en/BlogPage.json"
import es from "../../../locales/es/BlogPage.json"
import { Language } from "types"

const translations = { en, es }

type Post = {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
      description: string
      tags: string[]
      cover: {
        childImageSharp: {
          fluid: SVGAElement
        }
      }
    }
  }
}

type PostsProps = {
  posts: Post[]
  totalPage: string
  currentPage: string
  lang: Language
}

const Posts: React.FunctionComponent<PostsProps> = ({
  posts,
  totalPage,
  currentPage,
  lang,
}) => {
  return (
    <BlogPostsWrapper>
      <SecTitle>{translations[lang].latestPosts}</SecTitle>
      {posts.map(({ node }: Post) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <PostCardMinimal
            key={node.fields.slug}
            title={title}
            image={
              node.frontmatter.cover == null
                ? null
                : node.frontmatter.cover.childImageSharp.fluid
            }
            url={node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        )
      })}

      {+totalPage >> 1 ? (
        <Pagination
          nextLink="/page/2"
          currentPage={currentPage}
          totalPage={totalPage}
        />
      ) : (
        ""
      )}
    </BlogPostsWrapper>
  )
}

export default Posts
