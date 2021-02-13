import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import _ from "lodash"
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostReadTime,
  PostTags,
} from "./PostDetails.style"

type PostDetailsProps = {
  title: string
  date?: string
  preview?: any
  description: any
  timeToRead: number
  tags?: []
  className?: string
  imagePosition?: "left" | "top"
}

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  description,
  timeToRead,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass: string[] = ["post_details"]

  if (imagePosition == "left") {
    addClass.push("image_left")
  }

  if (className) {
    addClass.push(className)
  }

  return (
    <PostDetailsWrapper {...props} className={addClass.join(" ")}>
      <>
        {preview == null ? null : (
          <PostPreview className="post_preview">
            <div className="post-info">
              <div className="content">
                <PostTitle color="white">{title}</PostTitle>
                <PostDate color="lightgray">{date}</PostDate>
                <PostReadTime color="lightgray">
                  {timeToRead} minuto{timeToRead === 1 ? "" : "s"} de lectura
                </PostReadTime>
              </div>
            </div>
            <Img fluid={preview} alt={title} />
          </PostPreview>
        )}
      </>

      <PostDescriptionWrapper className="post_des_wrapper">
        {preview == null && (
          <>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </>
        )}

        <PostDescription
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  )
}

PostDetails.defaultProps = {
  imagePosition: "top",
}

export default PostDetails
