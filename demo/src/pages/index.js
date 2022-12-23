import React from "react"
import { Link } from "gatsby"
import { useFathom } from "@raae/gatsby-plugin-fathom"

import Layout from "../components/layout"

const IndexPage = () => {
  const { trackGoal, trackPageview } = useFathom()
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button onClick={() => trackGoal("YKZ06A57", 100)}>Track goal</button>
      <br />
      <br />
      <button
        onClick={() => trackPageview({ referrer: "https://example.com" })}
      >
        Track pageview
      </button>
      <br />
      <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
