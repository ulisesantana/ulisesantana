import * as React from "react"
import {GatsbyImage} from "gatsby-plugin-image";
import {
  Excerpt,
  PostCardWrapper,
  PostContent,
  PostDateAndPreview,
  PostDetails,
  PostPreview,
  PostTitle,
} from "./PostCardMinimal.style"
import {PostDate} from "../PostDate";

interface PostCardMinimalProps {
  image?: any
  title: string
  description?: string
  url: string
  date?: string
  tags?: string[]
  className?: string
}

const PostCardMinimal: React.FunctionComponent<PostCardMinimalProps> = ({
  image,
  title,
  description,
  url,
  date,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["post_card"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <PostCardWrapper className={addAllClasses.join(" ")} {...props}>
      <a href={url}>
        <PostDetails className="post_details">
          <PostDateAndPreview>
            {date && <PostDate date={date}/>}
            {image == null ? null : (
              <PostPreview className="post_preview">
                <GatsbyImage image={image} alt="Avance del artículo" />
              </PostPreview>
            )}
          </PostDateAndPreview>

          <PostContent className="post_content">
            <PostTitle className="post_title">{title}</PostTitle>
            {description && (
              <Excerpt
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
                className="excerpt"
              />
            )}
          </PostContent>
        </PostDetails>
      </a>
    </PostCardWrapper>
  )
}

export default PostCardMinimal
