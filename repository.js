"use strict"

var repository = {
  create: () => {
    new Promise((resolve, reject) => {
      resolve(res);
      }).then((res) => {
        console.log(res);
        done();
      }).catch((err) => {
        console.log(err);
        done(err);
      });
      return new Promise;
  }
 };

module.exports = repository;
