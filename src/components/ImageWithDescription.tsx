import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";

interface ImageWithDescriptionProps {
  id: string
  src: string
  alt: string
  children?: React.ReactChildren
}

/*
 * Making work images inside a React component in MDX is not intuitive.
 * You need to do a workaround (thanks StackOverflow):
 *
 * I have worked my way around this issue by adding an images array to my blog post mdx frontmatter e.g.
 * images: [formby-golf-club.jpg, myFirstTweet.PNG].
 *
 * Then in my post template I grab the publicURL of the images in the array via graphQL, and pass them
 * into MDXRenderer, like so: <MDXRenderer images={data.mdx.frontmatter.images}>.
 *
 * I can then access the images array in my mdx file like this:
 * <img src={props.images[0].publicURL} style={{ width: "100%" }} />
 *
 * Source: https://stackoverflow.com/questions/62825460/unable-to-add-images-to-mdx-file-in-gatsby
 */
export const ImageWithDescription: React.FunctionComponent<ImageWithDescriptionProps> = ({
  id,
  src,
  alt,
  children
}) => (
  <SRLWrapper options={{
    settings: {
      disableKeyboardControls: true,
      disableWheelControls: true
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    thumbnails: {
      showThumbnails: false
    }
  }}>
    <figure role="group" id={id}>
      <img
        src={src}
        alt={alt}
        style={{width: "100%", cursor: "pointer"}}
      />
      <figcaption>
        <small>
          {children}
        </small>
      </figcaption>
    </figure>
  </SRLWrapper>
)


export default ImageWithDescription
