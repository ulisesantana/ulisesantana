import React, { FC } from "react"
import { JobWrapper } from "./style"
import { PillCloud } from "../PillCloud"
import { JobHeader } from "./JobHeader"

export interface JobData {
  employer: string
  location: string
  position: string
  description: string
  from: string
  to?: string
  skills: string[]
}

export const Job: FC<JobData> = ({ skills, description, ...info }) => (
  <JobWrapper>
    <JobHeader {...info} />
    {typeof description === "string" &&
      description.split(/(?:\r\n|\r|\n)/g).map(t => <p>{t}</p>)}
    {!!skills.length && (
      <>
        <h3>Skills</h3>
        <PillCloud items={skills} />
      </>
    )}
    <hr />
  </JobWrapper>
)

export default Job
