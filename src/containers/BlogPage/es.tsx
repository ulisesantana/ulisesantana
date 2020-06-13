import * as React from "react"
import BlogPageWrapper from "./style"
import Intro from "../Intro"
import Posts from "./Posts"
import { useSpanishBlogPosts } from "../../hooks"

// import FeaturedPosts from "./FeaturedPost"

type BlogPageProps = {}

export const BlogPageSpanish: React.FunctionComponent<BlogPageProps> = ({
  ...props
}) => {
  const Data = useSpanishBlogPosts()

  const posts = Data.allMarkdownRemark.edges
  const TotalPage = Data.allSitePage.nodes[0].context.numPages
  const CurrentPage = Data.allSitePage.nodes[0].context.currentPage


  return (
    <BlogPageWrapper {...props}>
      <Intro lang="es" />
      {/* <FeaturedPosts /> */}
      <Posts
        lang="es"
        posts={posts}
        totalPage={TotalPage}
        currentPage={CurrentPage}
      />
    </BlogPageWrapper>
  )
}
