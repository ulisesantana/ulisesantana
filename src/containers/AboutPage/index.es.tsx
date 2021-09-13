import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { AboutWrapper, AboutImage, AboutPageTitle, AboutDetails } from "./style"
import Intro from "../Intro"
import { useState } from "react"
import { SocialLinks } from "../../components"
import Links from "./links"

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const [tldrOpen, setTLDROpen] = useState(false)
  const toggleTLDR = () => {
    setTLDROpen(!tldrOpen)
  }

  const tldrClassName = `tldr-${tldrOpen ? "open" : "closed"}`

  const Data = useStaticQuery(graphql`
    query {
      talk: file(absolutePath: { regex: "/jsdaycanarias.jpg/" }) {
        childImageSharp {
          fluid(cropFocus: CENTER, maxWidth: 870, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dahl: file(absolutePath: { regex: "/dahl.jpg/" }) {
        childImageSharp {
          fluid(cropFocus: CENTER, maxWidth: 870, quality: 90) {
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
    <>
      <AboutWrapper>
        <AboutPageTitle>
          <Intro lang="es" />
        </AboutPageTitle>
        <AboutDetails>
          <div className={`flex-start`}>
            <h2>Sobre mí</h2>
            <button onClick={toggleTLDR}>TL;DR</button>
          </div>
          <blockquote
            id={`tldr`}
            className={tldrClassName}
            onClick={toggleTLDR}
          >
            <section>
              <h2>TL;DR</h2>
              <p>
                Hola, me llamo Ulises Santana Suárez y vivo en Las Palmas de
                Gran Canaria, España. Soy Full Stack Developer en{" "}
                <a href={Links.work} target="_blank">
                  Lean Mind
                </a>
                . Durante los últimos 4 años he estado creando soluciones
                basadas en tecnología web, algunas de ellas usadas en varios países para millones de usuarios.
              </p>

              <p>
                Me apasiona programar, el ecosistema de web apps y aprender algo
                nuevo cada día. Estoy muy agradecido con la comunidad de
                desarrolladores y a toda la gente que me ha ayudado en mi senda
                hasta ser un desarrollador profesional. Así que como quiero
                devolver esa ayuda, si crees que puedo ayudarte de alguna
                manera, simplemente escríbeme un mensaje por twitter. Si no
                puedo ayudarte a lo mejor sé quien puede ayudarte. Por cierto,
                estoy muy interesado en proyectos con un bien social como fin,
                por lo que no dudes en contactar conmigo si crees que puedo
                aportar de alguna manera.
              </p>

              <SocialLinks />
            </section>
          </blockquote>
          <p>
            Nací en las Islas Canarias, España; concretamente en un pequeño
            pueblo en el sureste de Gran Canaria, un lugar maravilloso donde
            crecer. Desde que era niño pasaba horas navegando por internet y
            foros, por lo que no fue una gran sorpresa cuando me quedé prendado
            por el ecosistema web cuando estaba comenzando como Social Media
            Manager. Desde ese momento decidí que la web era esa "cosa" a la que
            quería dedicar el resto de mi vida.
          </p>
          <p>
            Sin embargo, mi destino con la web parece ser que no sería como
            Social Media Manager. Después de dos años y medio trabajando en ese
            rol me dí cuenta que el marketing no era lo mío, pero sí lo era el
            desarrollo web. Ese fue el punto de partida para convertirme en
            programador y la motivación para dejar la empresa que había
            cofundado y comenzar mis estudios en desarrollo de aplicaciones web.
            Considero que el marketing es muy interesante, pero prefiero
            programar aplicaciones y dejar a los amantes del marketing trabajar
            en marketing,
          </p>
          <p>
            Terminé el Ciclo Superior de Desarrollo de Aplicaciones Web en Junio
            de 2017. Justo después fui contratado como Backend Developer por{" "}
            <a href={Links.kentech} target="_blank">
              Kentech
            </a>
            , la empresa donde hice las prácticas. Kentech es un proveedor de
            soluciones a medida a lo largo de varios verticales, especializado
            en la industria entretenimiento online centrada en los deportes en
            múltiples países para millones de usuarios. Un año más tarde fui ascendido a Full Stack
            Developer y la mayoría del tiempo estuve trabajando con
            <a href={Links.angular} target="_blank">
              {" "}
              AngularJS
            </a>
            ,{" "}
            <a href={Links.react} target="_blank">
              React{" "}
            </a>
            y{" "}
            <a href={Links.node} target="_blank">
              Node.js
            </a>
            , pero también con
            <a href={Links.docker} target="_blank">
              {" "}
              Docker
            </a>{" "}
            y{" "}
            <a href={Links.rancher} target="_blank">
              Rancher
            </a>
            .
          </p>

          <p>
            3 años después pasé a formar parte de{" "}
            <a href={Links.work} target="_blank">
              Lean Mind
            </a>
            , un lugar increíble donde trabajar, donde trabajo como Full Stack
            Developer con otros equipos de desarrolladores para diferentes
            clientes con diferentes tecnologías. Sin embargo, por suerte en mi caso he podido seguir trabajando en{" "}
            <a href={Links.node} target="_blank">
              Node.js
            </a>, permitiéndome profundizar en la plataforma y aumentar mi expertise en ella. En{" "}
            <a href={Links.work} target="_blank">
              Lean Mind
            </a>{" "}
            nos encanta el código sostenible y siempre estamos dispuestos a aprender
            y compartir conocimiento, lo cual me encanta porque se alinea muy bien con mi
            filosofía como profesional.
          </p>
          <p>
            Desde que me gano la vida como desarrollador trato de mantenerme al
            día en JavaScript y la web, por lo que intento ir a todas las
            conferencias que puedo. Esto se tradujo en asistir a eventos como
            JSConf EU donde tuve la oportunidad de hacerme una selfie con Ryan
            Dahl, el creador de{" "}
            <a href={Links.node} target="_blank">
              Node.js
            </a>{" "}
            y{" "}
            <a href={Links.deno} target="_blank">
              Deno
            </a>{" "}
            . Fue un momento bastante fanboy.
          </p>

          <AboutImage>
            <Image
              fluid={Data.dahl.childImageSharp.fluid}
              alt="En la JSConf 2018 con Ryan Dahl"
            />
            <span>
              A la izquierda parte del gran equipo con el que trabajé en Kentech
              y Ryan Dahl justo después de dar
              <a href={Links.dahlNodeRegrets} target={`_blank`}>
                {" "}
                la charla más épica de JSConf EU 2018.
              </a>
            </span>
          </AboutImage>

          <p>
            En mi tiempo libre durante la semana trasteo con alguna tecnología
            como Node.js y trato de mejorar mis habilidades relacionadas con
            ingeniería de software leyendo blogs o libros. Durante los fines de
            semana disfruto pasando tiempo en familia o con amigos. Aunque
            también trato de hacer algo de turismo local.
          </p>

          <p>
            Últimamente tengo como objetivo devolver a la comunidad de
            desarrolladores la ayuda que me prestaron. Disfruto cada día en mi
            trabajo y eso es gracias a toda la gente que comparte su tiempo,
            conocimiento o punto de vista haciéndole a otros posible aprender
            conceptos o utilizar herramientas que de otra manera no sería
            posible. Por eso trato de dar al menos una charla al año en centros
            de formación personal. Suelo hablarles de tecnología web y de cómo
            es la industria de software. Trato de ayudarles para que optimicen
            su formación y puedan encontrar trabajo al terminar sus estudios.
          </p>

          <p>
            Hay otra meta personal que tengo pendiente y es construir o al menos
            ayudar a construir algo con un fin social. Casi lo consigo hace un
            par de años en{" "}
            <a href={Links.hack4good} target="_blank">
              Hack for Good
            </a>
            , pero el proyecto que construimos en 36 horas murió 6 meses
            después. Por lo tanto, si tienes un proyecto con un fin social y
            crees que puedo ayudar técnicamente, programando o pensado, ponte en
            contacto conmigo 😁
          </p>

          <p>
            Como parte de mi plan de aportar a la comunidad, he patrocinado las
            dos últimas ediciones de
            <a href={Links.jsday} target={`_blank`}>
              {" "}
              JS Day Canarias{" "}
            </a>
            y{" "}
            <a
              href="https://pythoncanarias.es/events/pydaygc19/"
              target={`_blank`}
            >
              PyDay Gran Canaria 2019
            </a>
            , aparte de también patrocinar y co-organizar el
            <a href="https://twitter.com/GDCR_Canarias" target={`_blank`}>
              Global Day of Coderetreat Canarias 2019
            </a>
            . Además, en Noviembre de 2018 tuve la oportunidad de dar una charla
            en
            <a href={Links.jsday2018} target={`_blank`}>
              {" "}
              JS Day Canarias{" "}
            </a>
            sobre
            <a href={Links.talk} target={`_blank`}>
              {" "}
              Node.js, npm y cómo publicar y mantener un paquete en un registro
              npm
            </a>
            . Me encantó la experiencia y quiero continuar compartiendo
            conocimiento con el resto del mundo.
          </p>

          <AboutImage>
            <Image fluid={Data.talk.childImageSharp.fluid} alt="author" />
          </AboutImage>
        </AboutDetails>
      </AboutWrapper>
    </>
  )
}

export default About
