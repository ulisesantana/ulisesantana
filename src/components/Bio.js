import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Ulises Santana`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Ulises Santana</strong> who lives and works in Las Palmas de Gran Canaria building useful things.{' '}
          <a href="https://twitter.com/ulisesantana">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
