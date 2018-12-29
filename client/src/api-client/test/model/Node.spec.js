/**
 * Weapon API
 * Move your app forward with the Weapon API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.apiClient);
  }
}(this, function(expect, apiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new apiClient.Node();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Node', function() {
    it('should create an instance of Node', function() {
      // uncomment below and update the code to test Node
      //var instane = new apiClient.Node();
      //expect(instance).to.be.a(apiClient.Node);
    });

    it('should have the property nodeName (base name: "nodeName")', function() {
      // uncomment below and update the code to test the property nodeName
      //var instane = new apiClient.Node();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instane = new apiClient.Node();
      //expect(instance).to.be();
    });

  });

}));
