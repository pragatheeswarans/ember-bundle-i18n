import Ember from 'ember';
import translate from 'dummy/utils/translate';

export default Ember.Route.extend({
  model() {
    window.Ember.STRINGS = {
      'x.darkknight': 'Batman',
      'x.hi': 'Hi {{name}}',
      'x.says': '{{name}} says, {{quote}}'
    };
    return translate('x.hi',{name: 'Tony stark'});
  }
});
