import * as React from 'react';
import Img from 'gatsby-image';
import {
  PostListWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostMeta,
  PostDate,
  PostTags,
} from './PostList.style';

interface PostListProps {
  image?: any;
  title: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
  imageType?: 'fixed' | 'fluid';
}

const PostList: React.FunctionComponent<PostListProps> = ({
  image,
  title,
  url,
  date,
  tags,
  className,
  imageType,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_list'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostListWrapper className={addAllClasses.join(' ')} {...props}>
      <a href={url}>
        {image == null ? null : (
          <PostPreview className="post_preview">
            {imageType === 'fluid' ? (
              <Img fluid={image} alt="post preview" />
            ) : (
              <Img fixed={image} alt="post preview" />
            )}
          </PostPreview>
        )}

        <PostDetails>
          <PostTitle className="post_title">{title}</PostTitle>
          <PostMeta>
            {date && (
              <PostDate
                dangerouslySetInnerHTML={{
                  __html: date,
                }}
                className="post_date"
              />
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
  );
};

PostList.defaultProps = {
  imageType: 'fluid',
};

export default PostList;
