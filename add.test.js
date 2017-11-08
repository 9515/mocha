
// 测试脚本， 代码的一部分
var add = require('./add.js');
// chai 断言库，判断源码的执行结果与预期结果是否执行一致？
// 如果不一致，就抛出错误 expect 是断言风格
var expect = require('chai').expect;
describe('加法函数的测试', function() {
    it('1加1应该等于2', function() {
        expect(add(1,1)).to.be.equal(2);
        expect(4+5).to.be.equal(9);
        expect(4+5).to.be.not.equal(10);
        expect('test').to.be.a('string');
    })
})