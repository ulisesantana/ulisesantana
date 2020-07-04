import React from "react"
import { Layout } from "../../components"
import {SEO} from "../../components"
import AboutPage from "../../containers/AboutPage"
import en from "../../locales/en/Intro.json"

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO
        description={en.about}
        title="Ulises Santana | JavaScript Engineer"
      />
      <AboutPage />
    </Layout>
  )
}

export default Home
