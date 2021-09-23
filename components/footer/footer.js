import React, { useEffect, useState } from 'react';

function Footer() {
  return <div className="mx-auto p-5 bg-third-primary ">
    <div className="container grid grid-cols-4 max-sm:grid-cols-1 text-white mx-auto max-2xl:px-6">
      <div className="col-span-2">
        <div className="border-b" style={{ borderColor: 'rgba(241,241,241, 0.08)', padding: '26px 0', }}>相关产品</div>
        <div className="my-10 flex flex-col">
          <a className="mt-2" href="https://www.haiouoms.com/" target="_blank">
            海鸥包裹集运转运系统
              </a>
          <a className="mt-2" href="https://www.rrtms.com/" target="_blank">
            红兔TMS
              </a>
          <a className="mt-2" href="https://chengzhong.nle-tech.com/" target="_blank">
            称重精灵
              </a>
          <a className="mt-2" href="https://www.cangmishu.com/" target="_blank">
            仓秘书
              </a>
        </div>
        <a href="https://beian.miit.gov.cn/" target="_blank"><div className="text-sm"> ©2021 订餐大王 All rights reserved.由 NLETECH 提供支持</div></a>
      </div>
      <div>
        <div className="border-b" style={{ borderColor: 'rgba(241,241,241, 0.08)', padding: '26px 0', }}>关于我们</div>
        <div className="my-10">
          <a href="http://www.nle-tech.com/" target="_blank">
            恩尔伊科技官方网站
              </a>
        </div>
      </div>
      <div className="text-right">
        <div className="border-b" style={{ borderColor: 'rgba(241,241,241, 0.08)', padding: '26px 0', }}>售前咨询</div>
        <div className="mt-10 flex items-center justify-end">
          <img className="mx-3" style={{ width: '32px', height: '32px' }} src="../images/phone.png" />
          <span>15576601706(同微信)</span>
        </div>
        <div className="mb-10">10:00-22:00</div>
        <img style={{ margin: '0 0 0 auto' }} src="../images/wx-code.png" alt="hu-bin-jie" />
      </div>
    </div>
  </div>
}

export default Footer