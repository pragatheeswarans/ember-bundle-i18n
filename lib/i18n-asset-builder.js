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

  var defaultLocaleTranslations = PropertiesParser.parse(fs.readFileSync(path.join(this.inputPaths[0], 'MessageResources_en.properties')));

  mkrip.sync(outputPath);

  fs.readdirSync(inputPath).forEach(function(file) {
    var fileName = path.basename(file,'.properties');
    var translations = PropertiesParser.parse(fs.readFileSync(path.join(inputPath, file)));
    translations = merge(defaultLocaleTranslations, translations);
    fs.writeFileSync(path.join(outputPath, fileName + '.js') , 'Ember.STRINGS = ' + JSON.stringify(translations));
  });
};

module.exports = I18NAssetBuilder;
