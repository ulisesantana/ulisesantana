import React, { FC } from "react"
import styled from "styled-components"

interface SectionProps {
  title: string
  icon: JSX.Element
  className?: string
}

const SectionTitleWrapper = styled.div`
  align-items: center;
  background-color: var(--primary-color);
  color: var(--black);
  display: flex;
  font-size: 2rem;
  justify-content: start;
  line-height: 2rem;
  margin: 2rem 0 1rem;
  padding: 1rem;

  h2, span {
    color: var(--black);
    display: inline-flex;
    font-size: 2rem;
    line-height: 2rem;
  }
  
  span {
    padding-right: 1rem;
  }

  h2 {
    margin: 0;
  }
`
const SectionWrapper = styled.section`
  font-size: 1rem;
  line-height: 1rem;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 1rem 0;
    max-width: 100%;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media print, screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 20px;

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`

const SectionTitle: FC<SectionProps> = ({ title, icon }) => (
  <SectionTitleWrapper>
    <span>{icon}</span>
    <h2>{title}</h2>
  </SectionTitleWrapper>
)

export const Section: FC<SectionProps> = ({
  title,
  icon,
  children,
  ...attrs
}) => (
  <SectionWrapper {...attrs}>
    <SectionTitle title={title} icon={icon} />
    <div className="content">{children}</div>
  </SectionWrapper>
)

export default Section
