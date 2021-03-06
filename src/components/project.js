import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ title, description, url, imageData }) => (
  <div className="project">
    <h1>{title}</h1>
    <div style={{ maxWidth: 500 + "px" }}>
      <Image fluid={imageData} alt={title} />
    </div>
    <p>{description}</p>
    <p>
      <a href={url}>View this project online &rarr;</a>
    </p>
    <p>
      <Link to="/">&larr; back to all projects</Link>
    </p>
  </div>
)

export default Project
