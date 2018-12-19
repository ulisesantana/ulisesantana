import React, { PureComponent } from "react"
import './AboutMe.styl'

export class AboutMe extends PureComponent {
  render() {
    return (
      <section className="AboutMe">
        <h3>
          {/*About me*/}
        </h3>
        <p>
          After 2 and a half years working as Social Media Manager I realized that marketing was not my thing, not my
          love, but coding
          was. That was my starting point for becoming a programmer and the motivation to leave the company I co-founded
          behind and enroll into my coding studies. I consider Marketing very interesting, but I prefer to work on the
          code and let marketing-lovers work on marketing.
        </p>

        <p>
          I finished my web application development studies in June 2017. Right after, I was hired in the company
          where I did my internship. Most of the time I am working with AngularJS and NodeJS, but also with Docker and
          Rancher. I come from the
          Canary Islands, Spain; land of sun and beaches. I have been an internet boy since I was a kid. My geekness
          grew
          up with me across the years and finally made me fall in love with the code.
        </p>

        <p>
          But of course code is not my only love. I also love beer, who does not? Beer with friends, beer at the beach,
          beer in a barbecue...
          I spend my free time cooking, reading, doing some geek stuff or just enjoying time with my friends. If you
          want
          to know what I am talking about check out my <a href="https://www.instagram.com/ulisesantana" target="_blank">
          Instagram <i className="fa fa-instagram" aria-hidden="true"></i></a>.
        </p>
      </section>
    )
  }
}

export default AboutMe
