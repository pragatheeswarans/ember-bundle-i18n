/* jshint node: true */
'use strict';

var I18nAssetBuilder = require('./lib/i18n-asset-builder');

module.exports = {
  name: 'ember-bundle-i18n',
  treeForPublic: function(tree) {
    return new I18nAssetBuilder(this.app.trees.app+'/i18n');
  }
};
