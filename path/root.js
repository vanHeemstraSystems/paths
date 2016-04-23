function PathRoot() {
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}


PathRoot.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


// Dummy functions
PathRoot.prototype.validate = function() {}


PathRoot.prototype.options = function() {}


PathRoot.prototype.optional = function() {}


PathRoot.prototype.required = function() {}


PathRoot.prototype.allowNull = function() {}


PathRoot.prototype._getDefaultFields = function(prefix, defaultFields, rootFields) {
  // We keep track of virtual fields even if there is no default value
  rootFields.push({
    path: prefix,
    value: this._default,
  });
}

module.exports = PathRoot;