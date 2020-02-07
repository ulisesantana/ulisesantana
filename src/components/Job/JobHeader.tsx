import React, { FC } from "react"
import { JobData } from "./Job"
import { GoLocation, MdWork } from "react-icons/all"
import { CVInfoWrapper } from "../CVInfoWrapper"

type JobInfo = Omit<JobData, "skills" | "description">

export const JobHeader: FC<JobInfo> = ({
  employer,
  position,
  location,
  from,
  to = "Now",
}) => (
  <CVInfoWrapper>
    <div className="info-title">
      <span className="info-position">{position}</span>
      <span className="info-date">
        {from} - {to}
      </span>
    </div>
    <div className="info-employer">
      <span>
        <MdWork />
      </span>
      <span>{employer}</span>
    </div>
    <div className="info-location">
      <span>
        <GoLocation />
      </span>
      <span>{location}</span>
    </div>
  </CVInfoWrapper>
)
