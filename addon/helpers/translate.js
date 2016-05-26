import Ember from 'ember';
import translate from 'ember-bundle-i18n/utils/translate';

export function translateHelper(params, hash) {
  const formatString = params[0];
  if (formatString) {
    return Ember.String.htmlSafe(translate(formatString, hash));
  }
}

export default Ember.Helper.helper(translateHelper);
