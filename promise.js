"use strict";

const expect = require('chai').expect;
const sinon = require('sinon');
const repository = require('./repository.js');

describe('es6 promises', function() {
  context("Stubbing the Api Call", function() {
    let  result = { data: "some external data" };
    sinon.stub(repository, 'create').returns(Promise.resolve(result));

    let myPromise = repository.create();

    it("checks if myPromise is defined", function () {
      expect(myPromise).not.be.undefined;
    });

    it("gets the resolved data from myPromise", function () {
      return myPromise.then(function(data){
               console.log("PASSING_EXPECTATION", "-I am passing!", data);
               expect(data).to.eql( { data: "some external data" } );
             });
    });

    // This test will be failing, to demonstrate its ability TO fail.
    it("does not become evergreen", function () {
      return myPromise.then(function(data){
               console.log("FAILING_EXPECTATION", "-I am failing!", data);
               expect(data).not.to.eql( { data: "some external data" } );
             });
    });
  });
});
