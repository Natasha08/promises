"use strict";

const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const repository = require('./repository.js');

describe('es6 promises', function() {

  context("Setting up the stub", function() {
    let  result = { id: "ExternalId" };

    sinon.stub(repository, 'create').returns(Promise.resolve(result));

    it("checks if myPromise is defined", function () {

        expect(repository.create()).not.be.undefined;
    });

    it("gets the resolved data from the promise", function () {
        let myPromise = repository.create();

        return myPromise.then(function(data){
          console.log("data", data);
          expect(data).to.eql( { id: "ExternalId" } );
        });
    });

    it("does not become evergreen", function () {
        let myPromise = repository.create();

        return myPromise.then(function(data){
          console.log("data", data);
          expect(data).not.to.eql( { id: "ExternalId" } );
        });
    });
  });
});
