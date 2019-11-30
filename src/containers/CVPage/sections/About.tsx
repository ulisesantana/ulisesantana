import React from "react"
import { Section } from "../../../components"

import { FaUserCircle } from "react-icons/all"
export function About() {
  return (
    <Section title="About me" icon={<FaUserCircle />}>
      <p>
        Hi, my name is Ulises Santana Suárez and I am located on Las Palmas,
        Spain. I am Full Stack Developer at
        <a href="https://www.kentech-sp.com" target="_blank">
          Kentech
        </a>
        , where I’ve been creating tech solutions based on web technologies with
        awesome people for the online entertainment industry, in multiple
        countries for millions of users, for the last 2 years and a half.
      </p>

      <p>
        I really love coding, the web app ecosystem and learn something new
        everyday. I’m very grateful to the developer community and all the
        people that helped me on my path to be a professional developer. So,
        just for keep the wheel rolling, if you think I can help you in any way
        just text me, if I can’t help you maybe I know somebody who can. By the
        way, I'm really interested in projects with a social good for aim, so
        don't hesitate to text me.
      </p>
    </Section>
  )
}

export const OtherSections = () => (
  <>
    <Section title="Language" icon={<FaUserCircle />}>
      <p>Stuff</p>
    </Section>
    <Section title="Milestones" icon={<FaUserCircle />}>
      <p>
        Compile NodeJS on a Chromebook, improve some tests and contribute to the
        project. https://twitter.com/ulisesantana/status/1059825362220261376
      </p>
    </Section>
  </>
)
