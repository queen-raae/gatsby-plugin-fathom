// This is an example using Jest (https://jestjs.io/)
import {testPluginOptionsSchema} from "gatsby-plugin-utils";
import {pluginOptionsSchema} from "./gatsby-node";

describe(`pluginOptionsSchema`, () => {
  it(`should invalidate incorrect options`, async () => {
    const options = {
      site: 123, // Should be a string
      honorDnt: `not a boolean`, // Should be a boolean
      auto: 123, // Should be a boolean
      canonical: `not a boolean`, // Should be a boolean
      excludedDomains: 123, // Should be a string
      includedDomains: 123, // Should be a string
      spa: "test", // Should be one of "auto", "history", "hash"
      loadType: "test", // Should be one of "defer", "async"
    };
    const {isValid, errors} = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    );

    expect(isValid).toBe(false);
    expect(errors).toEqual([
      `"site" must be a string`,
      `"honorDnt" must be a boolean`,
      `"auto" must be a boolean`,
      `"canonical" must be a boolean`,
      `"excludedDomains" must be a string`,
      `"includedDomains" must be a string`,
      `"spa" must be one of [auto, history, hash]`,
      `"loadType" must be one of [defer, async]`,
    ]);
  });

  it(`should validate correct options`, async () => {
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
    const {isValid, errors} = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    );

    expect(isValid).toBe(true);
    expect(errors).toEqual([]);
  });

  it(`should validate minimal options`, async () => {
    const options = {
      site: "SITE_ID",
    };
    const {isValid, errors} = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    );

    expect(isValid).toBe(true);
    expect(errors).toEqual([]);
  });

  it(`should require site`, async () => {
    const options = {
      site: undefined,
    };
    const {isValid, errors} = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    );

    expect(isValid).toBe(false);
    expect(errors).toEqual([`"site" is required`]);
  });
});
