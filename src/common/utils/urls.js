import URL from 'url';
import conf from '../config';
import isAbsoluteUrl from 'is-absolute-url';

export const baseURL = url => {
  return isAbsoluteUrl(url) ? url : URL.resolve(conf.url, url);
};

export const internalImagesURL = url => {
  return isAbsoluteUrl(url) ? url : URL.resolve(conf.imageURL, url);
};

export const imageURL = url => {
  return !url ? conf.imageFallBack : internalImagesURL(url);
};
