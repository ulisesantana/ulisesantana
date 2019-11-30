import React, { FC } from "react"
import styled from "styled-components"
import { themeGet } from "styled-system"

interface SectionProps {
  title: string
  icon: JSX.Element
}

const SectionTitleWrapper = styled.div`
  background-color: ${themeGet("colors.primary", "yellow")};
  align-items: center;
  color: ${themeGet("colors.black", "black")};
  display: flex;
  justify-content: start;
  padding: 1rem;
  margin: 2rem 0 1rem;

  span {
    display: inline-flex;
    font-size: 2rem;
    padding-right: 1rem;
  }

  h2 {
    display: inline-flex;
    margin: 0;
  }
`
const SectionWrapper = styled.section`
  font-size: 1.5rem;
  line-height: 1.5rem;

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 1rem 0;
    max-width: 100%;
  }
`

const SectionTitle: FC<SectionProps> = ({ title, icon }) => (
  <SectionTitleWrapper>
    <span>{icon}</span>
    <h2>{title}</h2>
  </SectionTitleWrapper>
)

export const Section: FC<SectionProps> = ({ title, icon, children }) => (
  <SectionWrapper>
    <SectionTitle title={title} icon={icon} />
    {children}
  </SectionWrapper>
)

export default Section
