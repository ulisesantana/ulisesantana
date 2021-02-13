import React from "react"
import { SpanishLayout } from "../components"
import { SEO } from "../components"
import AboutPage from "../containers/AboutPage/index.es"
import es from "../locales/es/Intro.json"

const Home: React.FunctionComponent = () => {
  return (
    <SpanishLayout>
      <SEO description={es.about} title="Sobre mí" />
      <AboutPage />
    </SpanishLayout>
  )
}

export default Home
