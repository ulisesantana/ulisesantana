import React from 'react'
import { Link } from 'gatsby'
import './Sidebar.styl'
import logo from './img/ulises-santa.png'

export const Sidebar = ({ location, title, menu }) => (
  <aside className={`Sidebar`}>
    <div className={`sidebar-info`}>
      <img src={logo} alt=""/>
      <h1>{
        title && title.split(' ').map(s => <span>{s}</span>)
      }</h1>
    </div>
    <nav>
      {
        menu.map(({ section, path }) =>
          (
            <Link
              className={`Link ${location.pathname === path ? 'active' : ''}`}
              to={path}
            >
              <div >
                {section.toUpperCase()}
              </div>
            </Link>
          )
        )
      }
    </nav>
  </aside>
);
