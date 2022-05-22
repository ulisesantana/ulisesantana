import React, { FC } from "react"
import {
  Section,
  Job,
  JobData,
  MilestoneData,
  Milestone,
} from "../../components"
import { useCV } from "../../hooks"
import { FaUserCircle, MdWork, MdSchool, FaStar } from "react-icons/all"

type InfoList = JobData[] | MilestoneData[]

const Text: FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(?:\r\n|\r|\n)/g).map((t: string) => (
      <p>{t}</p>
    ))}
  </>
)

function isJobList(info: InfoList): info is JobData[] {
  return (info[0] as JobData).skills !== undefined
}

const renderJob = (j: JobData) => (
  <Job key={j.position + j.from + j.to} {...j} />
)

const renderMilestone = (m: MilestoneData) => (
  <Milestone key={m.title + m.when} {...m} />
)

const renderInfo = (list: InfoList) => {
  if (!!list.length) {
    if (isJobList(list)) {
      return list.map(renderJob)
    }
    return list.map(renderMilestone)
  }
  return []
}


export function CV() {
  const { education, jobs, about, milestones, sponsored } = useCV()

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
        multiColumn
      >
        {renderInfo(milestones)}
      </Section>
      <Section title="Sponsored Events" icon={<FaStar />} multiColumn>
          {renderInfo(sponsored)}
      </Section>
    </>
  )
}
