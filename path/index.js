/*
 * index.js
 */
var PathRoot = require(__dirname+'/root.js');

/**
 * Create a new Path that let users create sub-paths.
 * @return {Path}
 */
function Path() { }

/**
 * Create a new PathRoot object.
 * @return {PathRoot}
 */
Path.prototype.root = function() {
  return new PathRoot();
}

/**
 * Check if the first argument is a PathRoot object or not
 * @param {Object} obj The object to check against PathRoot.
 * @return {boolean}
 */
Path.prototype.isRoot = function(obj) {
  return obj instanceof PathRoot;
}

module.exports = new Path();
