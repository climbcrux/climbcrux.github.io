import ReactGA from 'react-ga';


export function setPage(page, title) {
  ReactGA.pageview(page, title);
}
