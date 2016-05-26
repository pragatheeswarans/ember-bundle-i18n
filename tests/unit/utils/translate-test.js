import translate from 'dummy/utils/translate';
import Ember from 'ember';
import { module, test } from 'qunit';

module('Unit | Utility | translate');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(5);

window.Ember.STRINGS = {
  'x.darkknight': 'Batman',
  'x.hi': 'Hi {{name}}',
  'x.says': '{{name}} says, {{quote}}'
};
let testExpr = '<p>Hi</p>';
assert.equal(translate(testExpr), Ember.Handlebars.Utils.escapeExpression(testExpr), 'Unmatched input string is escaped before being returned');
assert.equal(translate('x.darkknight'), 'Batman', 'returns match when present');

assert.equal(translate('x.harveydent'), 'x.harveydent', 'returns key when translation not found');

assert.equal(translate('x.hi', {
  name: 'Bruce Wayne'
}).trim(), 'Hi Bruce Wayne'.trim(), 'translates with context');

assert.equal(translate('x.says', {
  name: 'Joker',
  quote: 'Why so serious?'
}).trim(), 'Joker says, Why so serious?'.trim(), 'translates with context containing more than one key');
});
