import React from "react"
import { Job, JobData, Section } from "../../../components"
import { MdSchool } from "react-icons/all"
import { useCV } from "../../../effects"
export function Education() {
  const { education } = useCV()

  return (
    <Section title="Education & Training" icon={<MdSchool />}>
      {!!education.length && education.map((e: JobData) => <Job {...e} />)}
    </Section>
  )
}
