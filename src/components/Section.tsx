import React, { FC } from "react"
import styled from "styled-components"

interface SectionProps {
  title: string
  icon: JSX.Element
  multiColumn?: boolean
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

  h2.title, span.title {
    color: var(--black);
    display: inline-flex;
    font-size: 2rem;
    line-height: 2rem;
  }
  
  span.title {
    padding-right: 1rem;
  }

  h2.title {
    margin: 0;
  }
`
const SectionWrapper = styled.section`
  font-size: 1rem;
  line-height: 1rem;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    &.multi-column {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 16px;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      margin: 1rem 0;
      max-width: 100%;
    }
  }

  @media print, screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 20px;

    .content {
      p {
        font-size: 14px;
        line-height: 20px;
      }  
    }
  }
`

const SectionTitle: FC<SectionProps> = ({ title, icon }) => (
  <SectionTitleWrapper>
    <span className="title">{icon}</span>
    <h2 className="title">{title}</h2>
  </SectionTitleWrapper>
)

export const Section: FC<SectionProps> = ({
  title,
  icon,
  children,
  multiColumn,
  ...attrs
}) => (
  <SectionWrapper {...attrs}>
    <SectionTitle title={title} icon={icon} />
    <div className={"content" + (multiColumn ? ' multi-column' : '')}>{children}</div>
  </SectionWrapper>
)

export default Section
