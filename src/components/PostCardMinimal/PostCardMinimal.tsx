import * as React from "react"
import Img from "gatsby-image"

import {
    Excerpt,
    PostCardWrapper,
    PostContent,
    PostDate,
    PostDateAndPreview,
    PostDetails,
    PostPreview,
    PostTitle,
} from "./PostCardMinimal.style"

interface PostCardMinimalProps {
    image?: any
    title: string
    description?: string
    url: string
    date?: string
    tags?: string[]
    className?: string
    imageType?: "fixed" | "fluid"
}

const PostCardMinimal: React.FunctionComponent<PostCardMinimalProps> = ({
                                                                            image,
                                                                            title,
                                                                            description,
                                                                            url,
                                                                            date,
                                                                            className,
                                                                            imageType,
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
                        {date && (
                            <PostDate
                                dangerouslySetInnerHTML={{
                                    __html: date,
                                }}
                                className="post_date"
                            />
                        )}
                        {image == null ? null : (
                            <PostPreview className="post_preview">
                                    {imageType === "fluid" ? (
                                        <Img fluid={image} alt="post preview"/>
                                    ) : (
                                        <Img fixed={image} alt="post preview"/>
                                    )}
                            </PostPreview>
                        )}
                    </PostDateAndPreview>

                    <PostContent className="post_content">
                        <PostTitle className="post_title">
                            {title}
                        </PostTitle>
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

PostCardMinimal.defaultProps = {
    imageType: "fluid",
}

export default PostCardMinimal
