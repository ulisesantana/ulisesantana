import React from 'react'
import './Layout.styl'
import { Sidebar } from './Sidebar'

import { rhythm, scale } from '../../utils/typography'

export const Layout = ({ location, title, menu, children }) => (
  <div className={`Layout`}>
    <Sidebar {...{ location, title, menu }} />
    <main
      className="Content"
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(32),
        padding: `${rhythm(0.5)}`,
      }}
    >
      {children}
    </main>
  </div>
);


export default Layout
