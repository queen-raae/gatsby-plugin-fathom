import React from "react";

const FathomScriptComponent = ({
  site,
  honorDnt,
  auto,
  canonical,
  excludedDomains,
  includedDomains,
  spa,
  loadType = "defer",
}) => {
  const loadProps = {
    [loadType]: true,
  };

  return (
    <script
      key="fathom-script"
      src="https://cdn.usefathom.com/script.js"
      data-site={site}
      data-honor-dnt={honorDnt}
      data-auto={auto}
      data-canonical={canonical}
      data-excluded-domains={excludedDomains}
      data-included-domains={includedDomains}
      data-spa={spa}
      {...loadProps}
    ></script>
  );
};

const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  return setHeadComponents([FathomScriptComponent(pluginOptions)]);
};

export { onRenderBody };
