import React from 'react'
import { Link } from 'gatsby'
import './Nav.styl'

export const Nav = ({ location, menu }) => (
  <nav className={`Nav`}>
    <ul>
      {
        menu.map(({ section, path }) =>
          (
            <li>
              <Link
                className={`Link ${location.pathname === path ? 'active' : ''}`}
                to={path}
              >
                {section.toUpperCase()}
              </Link>
            </li>
          )
        )
      }
    </ul>
  </nav>
)
