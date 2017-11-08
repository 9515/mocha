var add = require('../src/add.js');
var expect = require('chai').expect;

// 测试套件
describe('加法函数的测试', function() {
    // 测试用例
    it('1加1应该=2', function() {
        expect(add(1,1)).to.be.equal(2)
    })
    it('任何数加0都应该等于自身', function() {
        expect(add(1,0)).to.be.equal(1);
    })
})