import Ember from 'ember';

/**
  Usage

  Add I18N translion string to
  Ember.STRINGS = {
    'zp.common.helloworld': 'Hello World',
    'zp.common.hi': 'Hi {{name}}!'
  }

  Case 1:
    If a translion is found in Ember.STRINGS, will return the translion
    <p>{{translate "zp.common.helloworld"}}</p> compiles to
    <p>Hello World</p>

  Case 2:
    If a context is passed along with a translion
    <p>{{translate "zp.common.hi" name="Batman"}} compiles to
    <p>Hi Batman!</p>
*/
export default function translate(key, context) {
  let inputKey = key || '';
  let translation = Ember.STRINGS[inputKey];

  if (!translation) {
    //If a matching translation is not found, escape and return the key
    return Ember.Handlebars.Utils.escapeExpression(inputKey);
  }
  if (context) {
    translation = replaceValues(translation, context);
  }
  return translation;
}

function replaceValues(handlebarString, context) {
  return handlebarString.replace(/\{\{\s*(.*?)\s*\}\}/g, function(i, match) {
    return Ember.Handlebars.Utils.escapeExpression(Ember.get(context, match));
  });
}
