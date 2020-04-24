import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, title, description, imageData }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <div style={{ maxWidth: 400 + "px", maxHeight: 400 + "px" }}>
        <Image fluid={imageData} alt={title} />
      </div>
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/${slug}/`}>View this project &rarr;</Link>
    </p>
  </div>
)

export default ProjectPreview
