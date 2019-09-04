import * as React from "react"
import PersonalBlogWrapper from "./style"
import Intro from "./Intro"
import Posts from "./Posts"
import FeaturedPosts from "./FeaturedPost"

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Intro />
      <FeaturedPosts />
      <Posts />
    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
