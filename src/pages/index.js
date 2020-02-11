import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const query = graphql`
  {
    pages: allWordpressPage {
      edges {
        node {
          title
          slug
          content
        }
      }
    }
  }
`

const IndexPage = () => {
  const { pages } = useStaticQuery(query)

  return (
    <Layout>
      {pages.edges.map(page => (
        <div key={page.node.id}>
          <h1>{page.node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
