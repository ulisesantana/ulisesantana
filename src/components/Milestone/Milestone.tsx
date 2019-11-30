import React, { FC, useState, useEffect } from "react"
import { MilestoneWrapper } from "./style"
import { MilestoneHeader } from "./MilestoneHeader"
import parse from "html-react-parser"

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
  const [embedTwitter, setEmbedTwitter] = useState("")

  useEffect(() => {
    if (!!twitter) {
      fetch(
        "https://cors-anywhere.herokuapp.com/publish.twitter.com/oembed?url=" +
          twitter
      )
        .then(r => r.json())
        .then(({ html, ...rest }) => {
          console.log({ html, ...rest })
          setEmbedTwitter(html)
        })
    }
  }, [])

  return (
    <MilestoneWrapper>
      <MilestoneHeader {...info} />
      {typeof description === "string" &&
        description.split(/(?:\r\n|\r|\n)/g).map(t => <p>{t}</p>)}
      {!!youtube && (
        <iframe
          width="560"
          height="315"
          src={youtube}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
      <hr />
    </MilestoneWrapper>
  )
}

export default Milestone
