import React from 'react'
import './Layout.styl'
import { Nav } from './Nav'

export const Layout = ({ location, title, menu, children }) => (
  <div className={`Layout`}>
    <Nav {...{ location, title, menu }} />
    <main
      className="Content"
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: window.innerWidth,
      }}
    >
      {children}
    </main>
  </div>
);


export default Layout
