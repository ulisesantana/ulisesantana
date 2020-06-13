import * as React from "react"
import BlogPageWrapper from "./style"
import Intro from "../Intro"
import Posts from "./Posts"
import { useEnglishBlogPosts } from "../../hooks"

type BlogPageProps = {}

const BlogPageEnglish: React.FunctionComponent<BlogPageProps> = ({
  ...props
}) => {
  const Data = useEnglishBlogPosts()
  const posts = Data.allMarkdownRemark.edges
  const TotalPage = Data.allSitePage.nodes[0].context.numPages
  const CurrentPage = Data.allSitePage.nodes[0].context.currentPage

  return (
    <BlogPageWrapper {...props}>
      <Intro lang="en" />
      {/* <FeaturedPosts /> */}
      <Posts
        lang="en"
        posts={posts}
        totalPage={TotalPage}
        currentPage={CurrentPage}
      />
    </BlogPageWrapper>
  )
}

export default BlogPageEnglish
export * from "./es"
