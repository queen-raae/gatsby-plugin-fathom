import React from "react"
import { useFathom } from "@raae/gatsby-plugin-fathom"

const Example = () => {
  const { trackGoal, trackPageview } = useFathom()
  return (
    <main>
      <button onClick={() => trackGoal("YKZ06A57", 100)}>Track goal</button>
      <br />
      <br />
      <button
        onClick={() =>
          trackPageview({
            url: "https://yoursite.com/about",
            referrer: "https://referrer.com/yoursite-link",
          })
        }
      >
        Track pageview
      </button>
    </main>
  )
}

export default Example
