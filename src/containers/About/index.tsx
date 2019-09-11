import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
} from "./style"
import Intro from "../HomePage/Intro";
import {useState} from "react";
import {SocialLinks} from "../../components/SocialLinks";

interface AboutProps {
}

const Links = Object.freeze({
  dahlNodeRegrets: "https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM3BM9TB-8yA&usg=AOvVaw3uZDd9pOHxjAzGW76ATo6Q",
  work: 'https://www.kentech-sp.com',
  angular: 'https://angularjs.org',
  react: 'https://reactjs.org',
  node: 'https://nodejs.org',
  deno: "https://deno.land",
  docker: 'https://www.docker.com',
  rancher: 'https://rancher.com',
  talk: 'https://www.youtube.com/watch?v=Joqdb-oZjC8',
  hack4good: 'https://hackforgood.net/las-palmas/',
  jsday: 'https://jsdaycanarias.com',
  jsday2018: 'https://2018.jsdaycanarias.com'
});

const About: React.FunctionComponent<AboutProps> = () => {
  const [tldrOpen, setTLDROpen] = useState(false);
  const toggleTLDR = () => {
    setTLDROpen(!tldrOpen)
  };

  const tldrClassName = `tldr-${tldrOpen ? 'open' : 'closed'}`;

  const Data = useStaticQuery(graphql`
      query {
          talk: file(absolutePath: { regex: "/jsdaycanarias.jpg/" }) {
              childImageSharp {
                  fluid(maxWidth: 870, quality: 90) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          dahl: file(absolutePath: { regex: "/dahl.jpg/" }) {
              childImageSharp {
                  fluid(maxWidth: 870, quality: 90) {
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
    <AboutWrapper>
      <AboutPageTitle>
        <Intro/>
      </AboutPageTitle>
      <AboutDetails>
        <div className={`flex-start`}>
          <h2>About Me</h2>
          <button onClick={toggleTLDR}>TL;DR</button>
        </div>
        <blockquote id={`tldr`} className={tldrClassName} onClick={toggleTLDR}>
          <section>
            <h2>TL;DR</h2>
            <p>
              Hi, my name is Ulises Santana Suárez and I am located on Las Palmas,
              Spain. I am Full Stack Developer at <a href={Links.work} target="_blank">Kentech</a>,
               where I’ve been creating
              tech solutions based on web technologies with awesome people for the online
              entertainment industry, in multiple countries for millions of users,
              for the last 2 years and a half.
            </p>

            <p>
              I really love coding, the web app ecosystem and learn something new everyday. I’m very grateful to the
              developer community and all the people that helped me on my path to be a professional developer. So, just
              for
              keep the wheel rolling, if you think I can help you in any way just text me, if I can’t help you maybe I
              know somebody who can. By the way, I'm really interested in projects with a social good for aim,
              so don't hesitate to text me.
            </p>

            <SocialLinks/>
          </section>
        </blockquote>
        <p>
          I come from the Canary Islands, Spain; concretely from a little town in
          the southeast of Gran Canaria, a wonderful place to be raised. I have
          been an internet boy since I was a kid, so is not a big surprise to say
          that I got hooked by the web ecosystem when I was starting as
          Social Media Manager. I decided to spent my entire
          career working on the web at that very moment.
        </p>
        <p>
          However, my fate with the web looks like wouldn't be as Social Media Manager. After 2 and a half years working
          as on that role I realized that marketing was not my thing, not my love, but the coding was. That was my
          starting point for becoming a programmer and the motivation to leave the company I co-founded behind and
          enroll in my coding studies. I consider Marketing very interesting, but I prefer to work on the code and let
          marketing-lovers work on marketing.
        </p>
        <p>
          I finished my web application development studies in June 2017. Right after, I was hired as backend
          developer by <a href={Links.work} target="_blank">Kentech</a>, the company where I did my internship. Kentech is a provider of custom solutions across
          various verticals, specializing in the online entertainment industry with a focus on sports in multiple
          countries. One year later I was promoted to Full Stack Developer and most of the time I am working with
          <a href={Links.angular} target="_blank"> AngularJS</a>, <a href={Links.react} target="_blank">React </a>
           and <a href={Links.node} target="_blank">NodeJS</a>, but also with
           <a href={Links.docker} target="_blank"> Docker</a> and <a href={Links.rancher} target="_blank">Rancher</a>.
        </p>
        <p>

          Since I got hired I’m trying to keep myself on the cutting edge of JavaScript and the web so I try to go as
          many conferences as I can. This result in assisting to events like JSConf EU where I had the opportunity to
          take a selfie with Ryan Dahl, NodeJS and <a href={Links.deno} target="_blank">Deno</a> creator. A little fanboy moment.
        </p>

        <AboutImage>
          <Image fluid={Data.dahl.childImageSharp.fluid} alt="JS Conf 2018 with Ryan Dahl"/>
          <span>
            At the left some of the awesome people I work with and Ryan Dahl right after
            <a
              href={Links.dahlNodeRegrets}
              target={`_blank`}
            > the most epic talk at JS Conf EU 2018.</a>
          </span>
        </AboutImage>

        <p>
          On my free time during the workweek I play around with NodeJS and improve my CS skills by reading books and
          blogs. On the weekends I enjoy spending family time, meeting friends, watching movies or trying some local
          tourism.
        </p>

        <p>
          Lately, my main aim is giving back to the developer community. I enjoy every day at work and this is thanks to
          all the people that share their time, knowledge or point of view making others able to learn or use tools
          otherwise it wouldn't be possible.
        </p>

        <p>

          There is another personal goal which is pending and it's building or at least help to build something for
          social good. I kinda achieved this one at <a href={Links.hack4good} target="_blank">Hack for Good</a>,
          but the project build up in that 36-hours hackathon
          died 6 months later. So, if you have a project which fits this and you think I can help you in a tech way,
          coding or thinking, just text me 😁
        </p>

        <p>

          As part of my giveback plan, I've been sponsoring the last two
          <a href={Links.jsday} target={`_blank`}> JS Day Canarias </a>
          editions. Also, On November 2018 I had the opportunity
          to give a<a href={Links.talk} target={`_blank`}> talk </a>
          on <a href={Links.jsday2018} target={`_blank`}>JS Day Canarias </a>
          about NodeJS, npm and how to publish and maintain a package on an npm registry.
          I enjoyed the experience and I want to continue sharing the knowledge to the world.
        </p>


        <AboutImage>
          <Image fluid={Data.talk.childImageSharp.fluid} alt="author"/>
        </AboutImage>

      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
