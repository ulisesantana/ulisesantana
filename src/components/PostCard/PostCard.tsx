import * as React from 'react';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
} from './PostCard.style';

interface PostCardProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
  imageType?: 'fixed' | 'fluid';
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
  image,
  title,
  description,
  url,
  date,
  tags,
  className,
  imageType,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <a href={url}>
            {imageType === 'fluid' ? (
              <Img fluid={image} alt="post preview" />
            ) : (
              <Img fixed={image} alt="post preview" />
            )}
          </a>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {date && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: date,
            }}
            className="post_date"
          />
        )}

        <PostContent className="post_content">
          <PostTitle className="post_title">
            <a href={url}>{title}</a>
          </PostTitle>
          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="excerpt"
            />
          )}

          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <a key={index} href={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </a>
              ))}
            </PostTags>
          )}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

PostCard.defaultProps = {
  imageType: 'fluid',
};

export default PostCard;
