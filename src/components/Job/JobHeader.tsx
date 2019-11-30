import React, { FC } from "react"
import { JobData } from "./Job"
import { GoLocation, MdWork } from "react-icons/all"
import styled from "styled-components"
import { themeGet } from "styled-system"

type JobInfo = Omit<JobData, "skills" | "description">

const JobHeaderWrapper = styled.div`
  align-items: flex-start;
  color: ${themeGet("colors.secondary", "blue")};
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: 50vw;
  }

  .job-position,
  .job-date {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .job-position {
    margin-bottom: 1rem;
  }

  .job-employer,
  .job-location {
    align-items: center;
    display: inline-flex;
    flex-direction: row;

    span {
      padding: 4px;
      padding-left: 0;
    }
  }

  @media (max-width: 1200px) {
  }
  @media (max-width: 990px) {
  }
  @media (max-width: 575px) {
    div {
      width: auto;
    }
    .job-position,
    .job-date {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`

export const JobHeader: FC<JobInfo> = ({
  employer,
  position,
  location,
  from,
  to = "Now",
}) => (
  <JobHeaderWrapper>
    <div>
      <span className="job-position">{position}</span>
      <div className="job-employer">
        <span>
          <MdWork />
        </span>
        <span>{employer}</span>
      </div>
      <div className="job-location">
        <span>
          <GoLocation />
        </span>
        <span>{location}</span>
      </div>
    </div>
    <span className="job-date">
      {from} - {to}
    </span>
  </JobHeaderWrapper>
)
