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

export function CV() {
  const { education, jobs, about, milestones } = useCV()

  return (
    <>
      <Section title="About me" icon={<FaUserCircle />}>
        <Text text={about} />
      </Section>
      <Section title="Work experience" icon={<MdWork />}>
        {!!jobs.length &&
          jobs.map((experience: JobData) => (
            <Job
              key={experience.position + experience.from + experience.to}
              {...experience}
            />
          ))}
      </Section>
      <Section title="Education & Training" icon={<MdSchool />}>
        {!!education.length &&
          education.map((e: JobData) => (
            <Job key={e.position + e.from + e.to} {...e} />
          ))}
      </Section>
      <Section title="Milestones" icon={<FaStar />}>
        {!!milestones.length &&
          milestones.map((e: MilestoneData) => (
            <Milestone key={e.title + e.when} {...e} />
          ))}
      </Section>
    </>
  )
}
