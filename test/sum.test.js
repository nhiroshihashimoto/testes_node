'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum');

describe('# SUM', function(){

    //BDD
    //Método com Chai

    it('Shoukd SUM module to be a function', function(){
        expect(sum).to.be.a('function');
    });

    it('Should SUM return 10 when pass 1 and 9', function(){
        expect(sum(1,9)).to.be.equal(10);
    });

    it('Sould SUM return 5 when pass 2 and 3', function(){
        expect(sum(2,3)).to.be.equal(5);
    });

    it('Should SUM return an error if it receive just one parameter', function(){
        expect(sum(1)).to.be.an('error');
    });
    
    it('Should SUM return an error if the parameter has not a number', function(){
        expect(sum('a','b')).to.be.an('error');
    });

    //TDD
    //Método Assert do Node
    //assert.equal( função, return, mensagem )

    it('Assert', function(){
        var assert = require('assert');
        assert.equal(sum(20,30), 50, 'Message'); // equal ==
        assert.strictEqual(sum(20,30), 50, 'Message'); // strictEqual ===
    });

});
