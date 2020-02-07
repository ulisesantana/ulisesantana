import React, { FC, useMemo } from "react"
import { MilestoneWrapper } from "./style"
import { MilestoneHeader } from "./MilestoneHeader"

const getIframeSize = (maxWidth: number) => {
  const iframeWidth = maxWidth > 960 / 0.8 ? 960 : maxWidth * 0.8
  return [iframeWidth, iframeWidth / 1.8]
}
export interface MilestoneData {
  youtube?: string
  twitter?: string
  location: string
  title: string
  description: string
  when: string
}

export const Milestone: FC<MilestoneData> = ({
  youtube,
  twitter,
  description,
  ...info
}) => {
  const thereIsADescription =
    typeof description === "string" && description !== ""
  const [width, height] = getIframeSize(350)
  return (
    <MilestoneWrapper>
      <MilestoneHeader {...info} />
      {thereIsADescription &&
        description.split(/(?:\r\n|\r|\n)/g).map(t => <p>{t}</p>)}
      {!!youtube && (
        <>
          <div className="center no-print">
            <iframe
              width={width}
              height={height}
              src={youtube}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <p className="only-print">{youtube}</p>
        </>
      )}
    </MilestoneWrapper>
  )
}

export default Milestone
