import React from "react";
import {SRLWrapper} from "simple-react-lightbox";

export const Lightbox: React.FC = ({children}) => (
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
    {children}
  </SRLWrapper>
)
