var mocha = require("mocha");
var chai = require("chai");

superTest = require("supertest")

var expect = chai.expect;

describe("When I start my server", function(){
   
   var app = require("../server");
   var request = superTest.agent(app.listen());
   
   it("should return a status 200", function(done){
       request
         .get("/")
         .expect(200)
         .end(done);
   }); 
   
   it("should return Node at IDWEAVER by David!!!", function(done){
       request
         .get("/")
         .expect("Node at IDWEAVER by David!!!")
         .end(done);
   }); 

});

