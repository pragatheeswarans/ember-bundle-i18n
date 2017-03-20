/* jshint node: true */
'use strict';

var path = require('path');

var merge = require('lodash.merge');

var I18nAssetBuilder = require('./lib/i18n-asset-builder');
var I18nAssetMerger = require('./lib/i18n-asset-merger');

module.exports = {
  name: 'ember-bundle-i18n',

  isLocalizationFramework: true,

  treeForPublic: function(tree) {
    // Skip public tree construction for addons and engines for now
    // Need to iron out the cases and enable this as a feature
    if (!this.app) {
      return;
    }

    var options = this.app.options['ember-bundle-i18n'] || {};

    var defaultOptions = {
      defaultLocale: 'en',
      inputPath: 'app/i18n',
      outputPath: 'assets/i18n',
      outputFilePrefix: 'MessageResources_',
      prefixOtherLangFiles: true
    };

    options = merge(defaultOptions, options);

    var inputPath = options.inputPath;
    inputPath = path.join(this.project.root, inputPath);

    var inputTree = new I18nAssetMerger(inputPath, {
      outputPath: options.outputPath
    });

    return new I18nAssetBuilder(inputTree, {
      outputPath: options.outputPath,
      outputFilePrefix: options.outputFilePrefix,
      defaultLocale: options.defaultLocale,
      prefixOtherLangFiles: options.prefixOtherLangFiles,
      annotation: 'ember-bundle-i18n: parse properties'
    });
  }
};
