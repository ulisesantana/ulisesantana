import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Image from "gatsby-image"
import {AboutDetails, AboutImage, AboutWrapper} from "./style"
import Intro from "../Intro"
import {SocialLinks, TLDR} from "../../components"
import Links from "./links"

const About: React.FunctionComponent = () => {
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
      <Intro lang="en"/>
      <AboutWrapper>
        <AboutDetails>
          <h2>About Me</h2>
          <TLDR>
            <p>
              Hi, my name is Ulises Santana Suárez and I am located on El Hierro, Spain. I am Full Stack Developer
              at{" "}
              <a href={Links.work} target="_blank">
                Lean Mind
              </a>
              . I’ve been creating tech solutions based on web technologies for the last 4 years.
              Some of those solutions were used by millions of user across different countries.
            </p>

            <p>
              I really love coding, the web app ecosystem and learn something
              new everyday. I’m very grateful to the developer community and
              all the people that helped me on my path to be a professional
              developer. So, just for keep the wheel rolling, if you think I
              can help you in any way just text me, if I can’t help you maybe
              I know somebody who can. By the way, I'm really interested in
              projects with a social good for aim, so don't hesitate to text
              me.
            </p>

            <SocialLinks/>
          </TLDR>
          <p>
            I come from the Canary Islands, Spain; concretely from a little town
            in the southeast of Gran Canaria, a wonderful place to be raised. I
            have been an internet boy since I was a kid, so is not a big
            surprise to say that I got hooked by the web ecosystem when I was
            starting as Social Media Manager. I decided to spent my entire
            career working on the web at that very moment.
          </p>
          <p>
            However, my fate with the web looks like wouldn't be as Social Media
            Manager. After 2 and a half years working as on that role I realized
            that marketing was not my thing, not my love, but the coding was.
            That was my starting point for becoming a programmer and the
            motivation to leave the company I co-founded behind and enroll in my
            coding studies. I consider Marketing very interesting, but I prefer
            to work on the code and let marketing-lovers work on marketing.
          </p>
          <p>
            I finished my web application development studies in June 2017.
            Right after, I was hired as backend developer by{" "}
            <a href={Links.kentech} target="_blank">
              Kentech
            </a>
            , the company where I did my internship. Kentech is a provider of
            custom solutions across various verticals, specializing in the
            online entertainment industry with a focus on sports in multiple
            countries for millions of users. One year later I was promoted to Full Stack Developer and
            most of the time I was working with
            <a href={Links.angular} target="_blank">
              {" "}
              AngularJS
            </a>
            ,{" "}
            <a href={Links.react} target="_blank">
              React{" "}
            </a>
            and{" "}
            <a href={Links.node} target="_blank">
              Node.js
            </a>
            , but also with
            <a href={Links.docker} target="_blank">
              {" "}
              Docker
            </a>{" "}
            and{" "}
            <a href={Links.rancher} target="_blank">
              Rancher
            </a>
            .
          </p>
          <p>
            3 years later I enrolled on{" "}
            <a href={Links.work} target="_blank">
              Lean Mind
            </a>
            , a wonderful place to work, where I work remotely as Full Stack
            Developer with other developer teams for different customers with
            different technologies. However, lucky me, I've keep working with{" "}
            <a href={Links.node} target="_blank">
              Node.js
            </a>, getting deeper with the platform and increasing my expertise on it. At{" "}
            <a href={Links.work} target="_blank">
              Lean Mind
            </a>{" "}
            we love sustainable code and we are always willing to learn and share
            knowledge. For me this awesome because it's aligned to my own philosophy as professional.
          </p>
          <p>
            Since I got hired I’m trying to keep myself on the cutting edge of
            JavaScript and the web so I try to go as many conferences as I can.
            This result in assisting to events like JSConf EU where I had the
            opportunity to take a selfie with Ryan Dahl, Node.js and{" "}
            <a href={Links.deno} target="_blank">
              Deno
            </a>{" "}
            creator. A little fanboy moment.
          </p>

          <AboutImage>
            <Image
              fluid={Data.dahl.childImageSharp.fluid}
              alt="JS Conf 2018 with Ryan Dahl"
            />
            <span>
              At the left some of the awesome people I worked with at Kentech
              and Ryan Dahl right after
              <a href={Links.dahlNodeRegrets} target={`_blank`}>
                {" "}
                the most epic talk at JS Conf EU 2018.
              </a>
            </span>
          </AboutImage>

          <p>
            On my free time during the workweek I play around with Node.js and
            improve my CS skills by reading books and blogs. On the weekends I
            enjoy spending family time, meeting friends, watching movies or
            trying some local tourism.
          </p>

          <p>
            Lately, my main aim is giving back to the developer community. I
            enjoy every day at work and this is thanks to all the people that
            share their time, knowledge or point of view making others able to
            learn or use tools otherwise it wouldn't be possible. That´s one of
            the reasons why I try to give a talk at least once a year in a
            vocational school. The talks are about web tech and the software
            industry. I try to help them to optimize their studies increasing in
            this way their success finding a job at the end of the course.
          </p>

          <p>
            There is another personal goal which is pending and it's building or
            at least help to build something for social good. I kinda achieved
            this one at{" "}
            <a href={Links.hack4good} target="_blank">
              Hack for Good
            </a>
            , but the project build up in that 36-hours hackathon died 6 months
            later. So, if you have a project which fits this and you think I can
            help you in a tech way, coding or thinking, just text me 😁
          </p>

          <p>
            As part of my giveback plan, I've been sponsoring the last two
            <a href={Links.jsday} target={`_blank`}>
              {" "}
              JS Day Canarias{" "}
            </a>
            editions and{" "}
            <a
              href="https://pythoncanarias.es/events/pydaygc19/"
              target={`_blank`}
            >
              PyDay Gran Canaria 2019
            </a>
            , besides also sponsor and co-organize
            <a href="https://twitter.com/GDCR_Canarias" target={`_blank`}>
              Global Day of Coderetreat Canarias 2019
            </a>
            . Also, On November 2018 I had the opportunity to give a
            <a href={Links.talk} target={`_blank`}>
              {" "}
              talk{" "}
            </a>
            on{" "}
            <a href={Links.jsday2018} target={`_blank`}>
              JS Day Canarias{" "}
            </a>
            about Node.js, npm and how to publish and maintain a package on an
            npm registry. I enjoyed the experience and I want to continue
            sharing the knowledge to the world.
          </p>

          <AboutImage>
            <Image fluid={Data.talk.childImageSharp.fluid}
                   alt="Me talking about how create npm packages at JSDay Canarias 2018"/>
          </AboutImage>
        </AboutDetails>
      </AboutWrapper>
    </>
  )
}

export default About
