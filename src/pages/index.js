import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "../components/project-preview"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid

        return (
          <ProjectPreview
            title={title}
            description={description}
            imageData={imageData}
            slug={slug}
          />
        )
      })}
    </Layout>
  )
}
