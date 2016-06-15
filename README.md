# Ember-bundle-i18n

A simple addon to process i18n source files from `.properties`. Provides `{{translate}}`
helper and a `util:translate`.

Install this addon using

```bash
ember install pragatheeswarans/ember-bundle-i18n
```

You can pass options through `ember-cli-build.js`

```js

var app = new EmberAddon(defaults, {
  // Add options here
  'ember-bundle-i18n': {
    ...
  }
});

```

##Options

### defaultLocale

The locale you set as default will be used as a base for constructing i18n
assets. If a key is not available on any other locale, values from default
locale will be used.

default value: en

### inputPath

The location of your `.properties` files.

default value: app/i18n

### outputPath

This is the directory to which you want to write the output files.

default value: assets/i18n

### outputFilePrefix

Use this option to customise the prefix of your i18n asset output files.
If you do not want any prefix you can pass '' in the options.

defaultLocale: 'MessageResources_'

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
