/*global fathom */

const {GATSBY_FATHOM_DEBUG} = process.env;

const PREFIX = "[@raae/gatsby-plugin-fathom]";

const defaults = {
  debug: GATSBY_FATHOM_DEBUG,
};

export const useFathom = (props) => {
  props = {
    ...defaults,
    ...props,
  };

  const {debug} = props;

  const log = (message, ...rest) => {
    if (debug) {
      console.log(`${PREFIX} ${message}`, ...rest);
    }
  };

  const logFathomUndefined = () => {
    log(`${PREFIX} 'fathom' is undefined`);
  };

  const trackPageview = (...args) => {
    if (fathom) {
      fathom.trackPageview(...args);
      log("Track Pageview", ...args);
    } else {
      logFathomUndefined();
    }
  };

  const trackGoal = (...args) => {
    if (fathom) {
      fathom.trackGoal(...args);
      log("Track Goal", ...args);
    } else {
      logFathomUndefined();
    }
  };

  return {trackPageview, trackGoal};
};
