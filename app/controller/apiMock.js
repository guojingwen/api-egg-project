'use strict';

const Controller = require('egg').Controller;

class apiMockController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.href)
    if (ctx.path !== '/moduleenterprisepartner/config/getlogininfo.json') {
      ctx.body = 'apiMockController';
    } else {
      await this.getlogininfo();
    }
  }

  async getlogininfo() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 100);
    })
    this.ctx.body = {
      code: '0',
      message: 'from egg-api-mock',
      data: {
        message: '请求成功 from node',
        hasError: false,
        needRedirect: false,
        redirectUrl: '',
        userInfoVO: {
          loginId: '7093AF1F62BD76B92EDD4F743C207A19',
          encodeId: '89AB41A4C09910143AFC936556F6AE0DBF28749371B79CFB',
          extEncodeId: '278FBD65FB49FED779AC880F25A4694E0D2FFE71D6F2AB800CFB845A1FD9CEB0',
          login: true,
          userId: '',
          noHeader: false,
          noFooter: false,
          noEntry: false,
          wxConfigVO: null,
          isTempLogin: false,
          isGeneralIHospital: false,
          appId: 'p_h5_weiyi',
          verifyStatus: 2,
          sourceId: 27,
        },
      },
      errorClass: '',
      errorStack: '',
      violationItems: [],
      failure: false,
      success: true,
      error: false,
    };
  }
}

module.exports = apiMockController;
