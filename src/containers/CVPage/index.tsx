import * as React from "react"
import { CVWrapper, CVPageTitle, CVDetails } from "./style"
import Intro from "../HomePage/Intro"
import Navbar from "../../components/Navbar/Navbar"
import { CV } from "./CV"

export const CVPage: React.FC = () => {
  return (
    <>
      <Navbar />
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
