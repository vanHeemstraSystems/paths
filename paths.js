/*
 * paths.js
 */
var PathsPath = require(__dirname+'/path.js');

/**
 * Create a new Paths that let users create sub-paths.
 * @return {Paths}
 */
function Paths() { }

/**
 * Create a new PathsPath object.
 * @return {PathsPath}
 */
Paths.prototype.path = function() {
  return new PathsPath();
}

//ORIGINAL module.exports = new Paths();
module.exports = function() { return new Paths(); }
