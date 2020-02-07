import React, { FC } from "react"
import {
  Section,
  Job,
  JobData,
  MilestoneData,
  Milestone,
} from "../../components"
import { useCV } from "../../effects"
import { FaUserCircle, MdWork, MdSchool, FaStar } from "react-icons/all"

const Text: FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(?:\r\n|\r|\n)/g).map((t: string) => (
      <p>{t}</p>
    ))}
  </>
)

function isJob(info: JobData | MilestoneData): info is JobData {
  return (info as JobData).skills !== undefined
}

const renderJob = (j: JobData) => (
  <Job key={j.position + j.from + j.to} {...j} />
)

const renderMilestone = (m: MilestoneData) => (
  <Milestone key={m.title + m.when} {...m} />
)

const renderInfo = (list: JobData[] | MilestoneData[]) =>
  !!list.length && isJob(list[0])
    ? list.map(renderJob)
    : list.map(renderMilestone)

export function CV() {
  const { education, jobs, about, milestones, sponsored, attended } = useCV()

  return (
    <>
      <Section
        className="page-break-after"
        title="Who I am"
        icon={<FaUserCircle />}
      >
        <Text text={about} />
      </Section>
      <Section
        className="page-break-after"
        title="Work experience"
        icon={<MdWork />}
      >
        {renderInfo(jobs)}
      </Section>
      <Section
        className="page-break-after"
        title="Education & Training"
        icon={<MdSchool />}
      >
        {renderInfo(education)}
      </Section>
      <Section
        className="page-break-after"
        title="Milestones"
        icon={<FaStar />}
      >
        {renderInfo(milestones)}
      </Section>
      <Section title="Sponsored Events" icon={<FaStar />}>
        {renderInfo(sponsored)}
      </Section>
      <Section title="Attended Conferences during last year" icon={<FaStar />}>
        {renderInfo(attended)}
      </Section>
    </>
  )
}
