var multiply  = require('../../src/multiply.js');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
    // 测试用例
    it('1乘1应该=1', function() {
        expect(multiply(1,1)).to.be.equal(1)
    })
    it('任何和0都应该等于0', function() {
        expect(multiply(1,0)).to.be.equal(0);
    })
})