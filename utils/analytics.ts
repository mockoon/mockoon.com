import { isbot } from 'isbot';

export const sendEvent = (
  type: 'pageview' | 'event',
  eventName: 'download' = null,
  eventCategory: 'win' | 'mac' | 'linux' = null
) => {
  if (isbot(navigator.userAgent)) {
    return;
  }

  let referrer = sessionStorage.getItem('referrer');
  if (!referrer) {
    referrer = document.referrer || 'direct';
    sessionStorage.setItem('referrer', referrer);
  }
  let entryPage = sessionStorage.getItem('entryPage');
  if (!entryPage) {
    entryPage = window.location.pathname;
    sessionStorage.setItem('entryPage', entryPage);
  }

  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/events/website`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type,
      referrer,
      path: window.location.pathname,
      entryPage,
      eventName,
      eventCategory
    })
  })
    .then(() => {})
    .catch(() => {});
};
