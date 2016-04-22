/*
 * paths.js
 * 
 */
var path = require('../libraries/path');
var __rootdirname = path.join(__dirname, '/../');

module.exports = {
  root: __rootdirname,
  actions: path.join(__rootdirname, '/actions'),
  applications: path.join(__rootdirname, '/applications'),
  components: path.join(__rootdirname, '/components'),
  configurations: path.join(__rootdirname, '/configurations'),
  data: path.join(__rootdirname, '/data'),
  databases: path.join(__rootdirname, '/databases'),
  errors: path.join(__rootdirname, '/errors'), 
  environments: path.join(__rootdirname, '/environments'),
  feeds: path.join(__rootdirname, '/feeds'),
  libraries: path.join(__rootdirname, '/libraries'),
  listeners: path.join(__rootdirname, '/listeners'),
  mappings: path.join(__rootdirname, '/mappings'),
  models: path.join(__rootdirname, '/models'),
  paths: path.join(__rootdirname, '/paths'),
  prepublications: path.join(__rootdirname, '/prepublications'),
  publications: path.join(__rootdirname, '/publications'),
  queries: path.join(__rootdirname, '/queries'),
  resources: path.join(__rootdirname, '/resources'), 
  routes: path.join(__rootdirname, '/routes'),
  schemas: path.join(__rootdirname, '/schemas'),
  servers: path.join(__rootdirname, '/servers'),
  stores: path.join(__rootdirname, '/stores'),
  types: path.join(__rootdirname, '/types'),
  utilities: path.join(__rootdirname, '/utilities'),
  views: path.join(__rootdirname, '/views')
};
