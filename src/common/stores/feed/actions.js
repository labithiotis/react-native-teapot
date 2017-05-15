import { baseURL } from '../../utils/urls';
export const FETCH_FEED = 'FETCH_FEED';
export const FETCH_FEED_ERROR = 'FETCH_FEED_ERROR';
export const FETCH_FEED_START = 'FETCH_FEED_START';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';

export function fetchFeed() {
  return ({ fetch }) => ({
    type: FETCH_FEED,
    meta: { page: 1 },
    payload: {
      promise: fetch(baseURL('/r/popular.json')).then(res => res.json()),
    },
  });
}
