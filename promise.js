"use strict";

const expect = require('chai').expect;
const sinon = require('sinon');
const repository = require('./repository.js');

describe('es6 promises', function() {
  context("Stubbing the Api Call", function() {
    let  result = { id: "ExternalId" };
    sinon.stub(repository, 'create').returns(Promise.resolve(result));

    let myPromise = repository.create();

    it("checks if myPromise is defined", function () {
      expect(myPromise).not.be.undefined;
    });

    it("gets the resolved data from myPromise", function () {
      return myPromise.then(function(data){
               console.log("data", data);
               expect(data).to.eql( { id: "ExternalId" } );
             });
    });

    // This test will be failing, to demonstrate its ability TO fail.
    it("does not become evergreen", function () {
      return myPromise.then(function(data){
               console.log("data", data);
               expect(data).not.to.eql( { id: "ExternalId" } );
             });
    });
  });
});
