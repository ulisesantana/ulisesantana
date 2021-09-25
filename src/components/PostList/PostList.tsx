import * as React from "react"
import {
  PostListWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostMeta,
  PostDate,
  PostTags,
} from "./PostList.style"
import {DateHelper} from "../../dateHelper";
import {GatsbyImage} from "gatsby-plugin-image";

interface PostListProps {
  image?: any
  title: string
  url: string
  date?: string
  tags?: []
  className?: string
}

const PostList: React.FunctionComponent<PostListProps> = ({
  image,
  title,
  url,
  date,
  tags,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["post_list"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <PostListWrapper className={addAllClasses.join(" ")} {...props}>
      <a href={`/${url}`}>
        <PostPreview className="post_preview">
          <GatsbyImage image={image} alt="Avance del artículo" />
        </PostPreview>
        <PostDetails>
          <PostTitle className="post_title">{title}</PostTitle>
          <PostMeta>
            {date && (
              <PostDate
                className="post_date"
              >
                {DateHelper.toHuman(date)}
              </PostDate>
            )}
            {tags == null ? null : (
              <PostTags className="post_tags">
                {tags.map((tag: string, index: number) => (
                  <span key={index}>{`#${tag}`}</span>
                ))}
              </PostTags>
            )}
          </PostMeta>
        </PostDetails>
      </a>
    </PostListWrapper>
  )
}

export default PostList
