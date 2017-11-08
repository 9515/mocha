// 测试驱动开发？
// 先写测试，肯定会报错。
// 写代码让测试通过
// 代码的正确率高， 只写需要的代码(即只写需求)， 提高开发速度
const NinghaoDemo = require('../src/ninghao-demo.js')

const expect = require('chai').expect;
 describe('总价测试', function () {
     it('单价是10块的3件商品总价应该是30元', function () {
         var demo = new NinghaoDemo();
         var subtotal = demo.subtotal(10,3);
         expect(subtotal).to.be.equal(30);
     })
 })