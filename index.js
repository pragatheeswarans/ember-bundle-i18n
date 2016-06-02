/* jshint node: true */
'use strict';

var I18nAssetBuilder = require('./lib/i18n-asset-builder');

module.exports = {
  name: 'ember-bundle-i18n',

  isLocalizationFramework: true,

  treeForPublic: function(tree) {
    var outputPath = (this.app.options['ember-bundle-i18n'] && this.app.options['ember-bundle-i18n'].outputPath) || 'assets/i18n';

    return new I18nAssetBuilder(this.project.root + '/app/i18n', {
      outputPath: outputPath
    });
  }
};
