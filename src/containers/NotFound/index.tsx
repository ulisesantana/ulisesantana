import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { IoMdArrowRoundBack } from "react-icons/io"
import {
  Goback,
  Icon,
  NotFoundContent,
  NotFoundImage,
  NotFoundWrapper,
} from "./style"
import travolta from "../../images/travolta.gif"
import { Language } from "../../types"

interface NotFoundProps {
  lang: Language
}

const NotFound: React.FunctionComponent<NotFoundProps> = ({ lang }) => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/404.png/" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <NotFoundWrapper>
      <NotFoundContent>
        {lang === "en" ? <NotFoundTextEN /> : <NotFoundTextES />}
        <Goback>
          <Link to="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
          </Link>
        </Goback>
      </NotFoundContent>
      <NotFoundImage>
        <img src={travolta} alt="Travolta lost" />
      </NotFoundImage>
    </NotFoundWrapper>
  )
}

const NotFoundTextEN = () => (
  <>
    <h1>This Page Was Lost</h1>
    <p>
      The Page You are looking for isn’t available. Try to search again or use
      the Go Back button below.
    </p>
  </>
)

const NotFoundTextES = () => (
  <>
    <h1>Esta página no existe</h1>
    <p>
      No sé cómo has llegado hasta aquí, pero la página que estás buscando no
      existe. Puedes volver a la página anterior.
    </p>
  </>
)

export default NotFound
