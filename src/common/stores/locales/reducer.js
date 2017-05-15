import { locales, availableLanguages } from './../../locales';

const initialState = {
  locales,
  availableLanguages,
  selectedLanguage: 'en',
};

export default function localesReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case 'SET_LOCALE': {
      if (state.availableLanguages.includes(payload)) {
        return {
          ...state,
          ...{
            selectedLanguage: payload,
          },
        };
      } else {
        // eslint-disable-next-line no-console
        console.warn(
          `${payload} isn't available as a language: ${availableLanguages.join(',')}`,
        );
      }
    }
  }
  return state;
}
