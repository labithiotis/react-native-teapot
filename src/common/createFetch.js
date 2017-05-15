import URL from 'url';
import fetch from 'fetch-everywhere';
import isAbsoluteUrl from 'is-absolute-url';
global.self = global;

function resolveUrl(serverUrl, input) {
  if (typeof input !== 'string') return input;
  if (isAbsoluteUrl(input)) return input;
  return URL.resolve(serverUrl, input);
}

// Simple wrapper making isomorphic-fetch universal.
export default function createFetch(serverUrl) {
  return (input, init) => fetch(resolveUrl(serverUrl, input), init);
}
