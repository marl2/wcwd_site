import React from "react"
import Opinion from "../components/opinion"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function Question() {
  return <p> Can I do this in REact?</p>
  
}
function NavBar() {
  return <nav>Here is the navbar</nav>
}

function IndexPage() {
  return (
    <Layout> Hello
      <p>fun</p>
      <Question />
      <Question />
      <Opinion />
      <nav> Here is a nav bar</nav>
      <Link to="/page-3/">Go to page 3</Link>
    </Layout>
  )
}
    
/*const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)*/

export default IndexPage