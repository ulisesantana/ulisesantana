import * as React from "react"
import PersonalBlogWrapper from "./style"
import Intro from "./Intro"
import Posts from "./Posts"
import FeaturedPosts from "./FeaturedPost"
import Navbar from "../../components/Navbar/Navbar"

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Navbar />
      <Intro />
      {/* <FeaturedPosts /> */}
      <Posts />
    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
