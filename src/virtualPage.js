import ReactGA from 'react-ga';


export function setPage(page, title) {
  ReactGA.pageview(page, title);
}

export function recordEvent(category, action, extra) {
  console.log('Recording event', category, action);
  ReactGA.event({
    category: category,
    action: action,
    ...extra
  });
}
