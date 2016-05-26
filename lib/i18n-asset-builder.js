var Filter = require('broccoli-filter');
var PropertiesParser = require('properties-parser');

I18nAssetBuilder.prototype = Object.create(Filter.prototype);
I18nAssetBuilder.prototype.constructor = I18nAssetBuilder;

function I18nAssetBuilder(inputNode, options) {
  options = options || {};
  Filter.call(this, inputNode, {
    annotation: options.annotation
  });
}

I18nAssetBuilder.prototype.extensions = ['properties'];
I18nAssetBuilder.prototype.targetExtension = 'js';

/*
  Change oputput path to /assets/i18n - need to make this use options.outputPath
  and should not use getDestFilePath
*/
I18nAssetBuilder.prototype.getDestFilePath = function(relativePath) {
  var newRelativePath = Filter.prototype.getDestFilePath.call(this, relativePath);
  return '/assets/i18n/' + newRelativePath;
};

I18nAssetBuilder.prototype.processString = function(content, relativePath) {
  return 'Ember.STRINGS = '+ JSON.stringify(PropertiesParser.parse(content));
};

module.exports = I18nAssetBuilder;
