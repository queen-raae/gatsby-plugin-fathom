import {onRenderBody} from "./gatsby-ssr";

describe(`pluginOptionsSchema`, () => {
  it("renders correct when all options are set", () => {
    const options = {
      site: "SITE_ID",
      honorDnt: false,
      auto: true,
      canonical: true,
      excludedDomains: "example.com",
      includedDomains: "test.com",
      spa: "auto",
      loadType: "async",
    };

    const setHeadComponents = jest.fn((x) => x);
    const result = onRenderBody({setHeadComponents}, options);
    const script = result[0];

    expect(script.key).toBe("fathom-script");
    expect(script.props).toMatchObject({
      src: "https://cdn.usefathom.com/script.js",
      "data-site": "SITE_ID",
      "data-honor-dnt": false,
      "data-auto": true,
      "data-canonical": true,
      "data-excluded-domains": "example.com",
      "data-included-domains": "test.com",
      "data-spa": "auto",
      async: true,
    });
  });

  it("renders correct with minimal options", () => {
    const options = {
      site: "SITE_ID",
      spa: "history",
      loadType: "defer",
    };

    const setHeadComponents = jest.fn((x) => x);
    const result = onRenderBody({setHeadComponents}, options);
    const script = result[0];

    expect(script.key).toBe("fathom-script");
    expect(script.props).toMatchObject({
      src: "https://cdn.usefathom.com/script.js",
      "data-site": "SITE_ID",
      "data-honor-dnt": undefined,
      "data-auto": undefined,
      "data-canonical": undefined,
      "data-excluded-domains": undefined,
      "data-included-domains": undefined,
      "data-spa": "history",
      defer: true,
    });
  });
});
