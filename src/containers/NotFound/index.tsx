import * as React from "react"
import { Link } from "gatsby"
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
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        {lang === "en" ? <NotFoundTextEN /> : <NotFoundTextES />}
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
    <Goback>
      <Link to="/">
        <Icon>
          <IoMdArrowRoundBack />
        </Icon>
      </Link>
      <span>GO TO HOME</span>
    </Goback>
  </>
)

const NotFoundTextES = () => (
  <>
    <h1>Esta página no existe</h1>
    <p>
      No sé cómo has llegado hasta aquí, pero la página que estás buscando no
      existe. Puedes volver a la página principal.
    </p>
    <Goback>
      <Link to="/">
        <Icon>
          <IoMdArrowRoundBack />
        </Icon>
        <span>VOLVER AL INICIO</span>
      </Link>
    </Goback>
  </>
)

export default NotFound
