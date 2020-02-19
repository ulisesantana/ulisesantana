import * as React from "react"
import { CVWrapper, CVPageTitle, CVDetails } from "./style"
import Intro from "../Intro"
import { CV } from "./CV"

export const CVPage: React.FC = () => {
  return (
    <>
      <CVWrapper>
        <CVPageTitle>
          <Intro />
        </CVPageTitle>
        <CVDetails>
          <CV />
        </CVDetails>
      </CVWrapper>
    </>
  )
}

export default CVPage
