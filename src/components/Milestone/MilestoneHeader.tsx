import React, { FC } from "react"
import { MilestoneData } from "./Milestone"
import { CVInfoWrapper } from "../CVInfoWrapper"
import { GoLocation, FaCalendarDay } from "react-icons/all"

type MilestoneInfo = Omit<MilestoneData, "iframe" | "description">

export const MilestoneHeader: FC<MilestoneInfo> = ({
  title,
  when,
  location,
}) => (
  <CVInfoWrapper>
    <div className="info-title">
      <span className="info-position">{title}</span>
    </div>
    <span className="info-date">
      <span>
        <FaCalendarDay />
      </span>
      <span>{when}</span>
    </span>
    <div className="info-location">
      <span>
        <GoLocation />
      </span>
      <span>{location}</span>
    </div>
  </CVInfoWrapper>
)
