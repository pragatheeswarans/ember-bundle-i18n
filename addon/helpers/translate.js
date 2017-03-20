import Ember from 'ember';
import translate from 'ember-bundle-i18n/utils/translate';

export function translateHelper(params, hash) {
  const formatString = params[0];
  const options = params[1];
  const args = options && options.hash || hash;

  if (formatString) {
    return Ember.String.htmlSafe(translate(formatString, args));
  }
}

export default Ember.Helper.helper(translateHelper);
