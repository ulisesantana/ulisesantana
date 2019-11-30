import React, { FC } from "react"
import { MilestoneData } from "./Milestone"
import { GoLocation } from "react-icons/all"
import styled from "styled-components"
import { themeGet } from "styled-system"

type MilestoneInfo = Omit<MilestoneData, "iframe" | "description">

const MilestoneHeaderWrapper = styled.div`
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

export const MilestoneHeader: FC<MilestoneInfo> = ({
  title,
  when,
  location,
}) => (
  <MilestoneHeaderWrapper>
    <div>
      <span className="job-position">{title}</span>
      <div className="job-location">
        <span>
          <GoLocation />
        </span>
        <span>{location}</span>
      </div>
    </div>
    <span className="job-date">{when}</span>
  </MilestoneHeaderWrapper>
)
