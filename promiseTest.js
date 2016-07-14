
"use strict";

var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
//require('../test-helper');
var repository = require('./repository.js');

describe('es6 promises', function() {
  let spy = sinon.spy();

  context("Setting up the stub", function() {
    let  result = { id: "ExternalId" };

    sinon.stub(repository, 'create').returns(new Promise(result));
  });

  it("checks if myPromise is defined", function () {

      expect(repository.create()).not.be.undefined;
  });

  it("gets a result with sinon spy", function () {
      let proxy = repository.create;

      proxy();
      console.log(proxy());
      expect(proxy()).to.eql( { id: "ExternalId" } );
  });
});
