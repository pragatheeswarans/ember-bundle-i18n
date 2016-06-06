/* jshint node: true */
'use strict';

var path = require('path');

var I18nAssetBuilder = require('./lib/i18n-asset-builder');
var I18nAssetMerger = require('./lib/i18n-asset-merger');

module.exports = {
  name: 'ember-bundle-i18n',

  isLocalizationFramework: true,

  treeForPublic: function(tree) {
    var options = this.app.options['ember-bundle-i18n'] || {};
    var outputPath = options.outputPath || 'assets/i18n';
    var inputPath = options.inputPath || 'app/i18n';
    inputPath = path.join(this.project.root, inputPath);

    var inputTree = new I18nAssetMerger(inputPath, {
      outputPath: outputPath,
      annotation: 'ember-bundle-i18n: merge properties'
    });

    return new I18nAssetBuilder(inputTree, {
      outputPath: outputPath,
      destDir: 'ember-bundle-i18n: parse properties'
    });
  }
};
