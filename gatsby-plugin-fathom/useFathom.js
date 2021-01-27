/*global fathom */

const {GATSBY_FATHOM_DEBUG} = process.env;

const useFathom = ({debug = GATSBY_FATHOM_DEBUG} = {}) => {
  const log = (message, ...rest) => {
    if (debug) {
      console.log(`Fathom analytics: ${message}`, ...rest);
    }
  };

  const logFathomUndefined = () => {
    log("'fathom' is undefined");
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
      log("Track Goal", args);
    } else {
      logFathomUndefined();
    }
  };

  return {trackPageview, trackGoal};
};

export default useFathom;
