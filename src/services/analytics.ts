/* eslint-disable dot-notation */
export const sendGAEvent = (action, params) => {
  if (window['gtag']) {
    window['gtag']('event', action, params);
  }
};
