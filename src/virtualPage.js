import ReactGA from 'react-ga';


export function setPage(page, title) {
  ReactGA.ga('set', 'title', title);
  ReactGA.pageview(page, title);
}

export function recordEvent(category, action, extra) {
  ReactGA.event({
    category: category,
    action: action,
    ...extra
  });
}

export function recordOutbound(destination) {
  ReactGA.outboundLink({
    label: destination
  });
}
