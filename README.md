# gatsby-plugin-fathom

> Use Gatsby Plugin Fathom to add Fathom Analytics tracking to your site.

Instead of messing with [html.js as Fathom suggests](https://usefathom.com/integrations/gatsbyjs), use this plugin to add the Fathom tracking script the Gatsby way.

Gatsby Plugin Fathom exposes all the [advanced tracking options](https://usefathom.com/support/tracking-advanced) as plugin options.

## What is Fathom?

From the [Fathom website](https://usefathom.com/):

> Fathom is a simple, light-weight, privacy-first alternative to Google Analytics. So, stop scrolling through pages of reports and collecting gobs of personal data about your visitors, both of which you probably don’t need. Our website stats show up on a single, blazingly fast dashboard so you can make business decisions quickly.

## How to install

`npm install @raae/gatsby-plugin-fathom`

or

`yarn add @raae/gatsby-plugin-fathom`

## How to use

### Basic configuration

The only require option is site.

```
module.exports = {
  plugins: [
    {
      resolve: `@raae/gatsby-plugin-fathom`,
      options: {
        site: "<your fathom site id>",
      },
    },
  ],
}
```

Feel free to use my test site id "CNOZPPSE" and [check the dashboard](https://app.usefathom.com/share/cnozppse/testing) to see if your setup is correct.

### Advanced configuration

Learn more below and in Fathom's [advanced tracking options](https://usefathom.com/support/tracking-advanced) docs.

```
module.exports = {
  plugins: [
    {
      resolve: `@raae/gatsby-plugin-fathom`,
      options: {
        site: <your fathom site id>,
        honorDnt: <true or false>,
        canonical: <true or false>,
        excludedDomains: <a comma-separated (no space) list of excluded domains>,
        includedDomains: <a comma-separated (no space) list of included domains>,
        spa: <"auto", "history" or "hash">
        loadType: <"defer" or "async">
      },
    },
  ],
}
```

### Available options

Check the Fathom [advanced tracking options](https://usefathom.com/support/tracking-advanced) docs for more information on these.

| Name              | Type                                        | Default    | Description                                        |
| ----------------- | ------------------------------------------- | ---------- | -------------------------------------------------- |
| `site`            | String                                      | no default | Your Fathom site id (required)                     |
| `honorDnt`        | Boolean                                     | `false`    | Honor Do Not Track?                                |
| `auto`            | Boolean                                     | `true`     | Automatically track page views?                    |
| `canonical`       | Boolean                                     | `true`     | Use the canonical URL, instead of the current URL? |
| `excludedDomains` | Comma separated list of domains, no spaces. | no default | Excludes tracking for these domains                |
| `includedDomains` | Comma separated list of domains, no spaces. | no default | Include tracking for these domains                 |
| `spa`             | `"auto"`, `"history"` or `"hash"`           | `"auto"`   | Tracking mode                                      |
| `loadType`        | `"defer"` or `"async"`                      | `"defer"`  | Tracking mode                                      |

## How to contribute

### Questions, Feedback and Suggestions

If you have any questions, feedback or suggestions head on over to [discussions](https://github.com/raae/gatsby-plugin-fathom/discussions).

### Bugs

If you find a bug please open an [issue](https://github.com/raae/gatsby-plugin-fathom/issues) and/or create a pull request to fix it.

## Stay updated

Stay updated on the development of this plugin by [subscribing to updates](https://email.raae.codes/plugins) from [@raae](https://twitter.com/raae).
