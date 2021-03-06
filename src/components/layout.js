import React from "react"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <header className="header">
      <Link to="/">My Portfolio</Link>
    </header>
    <main className="content">{children}</main>
  </>
)

export default Layout
