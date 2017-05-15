import { get } from 'lodash';

export default function getLocale(props, key, fallBack = '') {
  return get(
    props,
    `locale.${key}`,
    get(props, `locales.locales.en.${key}`, fallBack),
  );
}
