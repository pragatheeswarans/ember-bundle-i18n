var Plugin = require('broccoli-plugin');
var fs = require('fs');
var PropertiesParser = require('properties-parser');
var mkrip = require('mkdirp');
var path = require('path');
var merge = require('lodash.merge');

I18NAssetBuilder.prototype = Object.create(Plugin.prototype);
I18NAssetBuilder.constructor = I18NAssetBuilder;

function I18NAssetBuilder(inputNodes, options) {
  options = options || {};
  Plugin.call(this, [inputNodes], {
    annotation: options.annotation
  });
  this.options = options;
}

I18NAssetBuilder.prototype.build = function() {
  var outputPath = path.join(this.outputPath,  this.options.outputPath);
  var inputPath = this.inputPaths[0];
  var outputFilePrefix = this.options.outputFilePrefix;
  var defaultLocaleFile = path.join(inputPath, this.options.defaultLocale + '.properties');

  var defaultLocaleTranslations = parsePropertiesFile(defaultLocaleFile);

  mkrip.sync(outputPath);

  fs.readdirSync(inputPath, { encoding: 'utf8' }).forEach(function(file) {
    var fileName = outputFilePrefix + path.basename(file, '.properties');
    var translations = parsePropertiesFile(path.join(inputPath, file));

    translations = merge({}, defaultLocaleTranslations, translations);

    var outputString = 'Ember.STRINGS = ' + JSON.stringify(translations);
    var outputFileName = path.join(outputPath, fileName + '.js');

    fs.writeFileSync(outputFileName, outputString, { encoding: 'utf8' });
  });
};

function parsePropertiesFile(fileName) {
  return PropertiesParser.parse(fs.readFileSync(fileName));
}

module.exports = I18NAssetBuilder;
