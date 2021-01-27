exports.pluginOptionsSchema = ({Joi}) => {
  return Joi.object({
    site: Joi.string().required().description(`The Fathom site id`),
    honorDnt: Joi.boolean().description(`Honor Do Not Track?`),
    auto: Joi.boolean().description(`Automatically track page views?`),
    canonical: Joi.boolean().description(
      `Use the canonical URL, instead of the current URL`
    ),
    excludedDomains: Joi.string().description(`Exclude these domains`),
    includedDomains: Joi.string().description(`Include these domains`),
    spa: Joi.string()
      .valid("auto", "history", "hash")
      .default("auto")
      .description(`How to track page views`),
    loadType: Joi.string()
      .valid("defer", "async")
      .default("defer")
      .description(`How to load script`),
  });
};
