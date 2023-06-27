export const sendEvent = (
  type: 'pageview' | 'event',
  eventName: 'download' = null,
  eventCategory: 'win' | 'mac' | 'linux' = null
) => {
  let referrer = sessionStorage.getItem('referrer');
  if (!referrer) {
    referrer = document.referrer || 'direct';
    sessionStorage.setItem('referrer', referrer);
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
      eventName,
      eventCategory
    })
  })
    .then(() => {})
    .catch(() => {});
};
