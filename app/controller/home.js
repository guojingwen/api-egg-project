'use strict';

const Controller = require('egg').Controller;
const jsons = require('../public');

class HomeController extends Controller {
  async index() {
    const { ctx, ctx: { request } } = this;
    const key = ctx.path.substring(5, ctx.path.length - 5);
    const keys = Object.keys(jsons);
    const otherKeys = keys.map(item => `other_${item}`);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, parseInt(Math.random() * 100));
    });
    if (keys.includes(key)) {
      ctx.body = mockData(jsons[key], request.body);
    } else if (otherKeys.includes(key)) {
      if ([ 'lisi', 'zhangsan' ].includes(request.body.userId)) {
        ctx.body = mockData(require(`../public/${request.body.userId}/${key.substring(6, key.length)}`), request.body);
      } else {
        ctx.body = mockData([], request.body);
      }
    } else {
      ctx.body = 'not found';
    }
  }
}

module.exports = HomeController;

function mockData(source, params) {
  const endNo = params.pageIndex * params.pageSize;
  return {
    flag: 0,
    list: source.slice(endNo - 10, endNo),
    pageIndex: params.pageIndex,
    pageSize: 10,
    count: source.length,
    message: '成功',
  };
}
