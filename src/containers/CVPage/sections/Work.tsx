import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Job, JobData, Section } from "../../../components"

import { MdWork } from "react-icons/all"
export function Work() {
  const {
    allDataYaml: {
      nodes: [{ jobs }],
    },
  } = useStaticQuery(graphql`
    query {
      allDataYaml {
        nodes {
          jobs {
            description
            location
            from
            employer
            skills
            position
            to
          }
        }
      }
    }
  `)

  return (
    <>
      <Section title="Work experience" icon={<MdWork />}>
        {!!jobs.length &&
          jobs.map((experience: JobData) => <Job {...experience} />)}
      </Section>
    </>
  )
}
