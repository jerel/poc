/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    exclude: ['assets/leaflet'],
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/leaflet/dist/leaflet-src.js');
app.import('bower_components/leaflet/dist/leaflet.css');
app.import('bower_components/leaflet/dist/images/layers.png', {
  destDir: 'assets/leaflet'
});
app.import('bower_components/leaflet/dist/images/layers-2x.png', {
  destDir: 'assets/leaflet'
});
app.import('bower_components/leaflet/dist/images/marker-icon.png', {
  destDir: 'assets/leaflet'
});
app.import('bower_components/leaflet/dist/images/marker-shadow.png', {
  destDir: 'assets/leaflet'
});
app.import('bower_components/leaflet/dist/images/marker-icon-2x.png', {
  destDir: 'assets/leaflet'
});


module.exports = app.toTree();
