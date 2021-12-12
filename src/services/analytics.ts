/* eslint-disable dot-notation */
export const sendGAEvent = (action, params) => {
  console.log(window['gtag']);
  console.log(action, params);

  if (window['gtag']) {
    window['gtag']('event', action, params);
  }
};
