import config from '../config';

export default function mapStateToProps(state) {
  return {
    ...state,
    config: config,
    locale: state.locales.locales[state.locales.selectedLanguage],
  };
}
