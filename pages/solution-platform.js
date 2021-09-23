import Head from 'next/head'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const deployDemand = [
  {
    key: '员工管理',
    value: '为运营后台系统设置员工账号，设置员工账号之后方可登录运营后台系统'
  },
  {
    key: '客户管理',
    value: `展示整个平台的客户账号信息，方便运营收集与分析不同客户的购买需求与习惯`
  },
  {
    key: '店主管理',
    value: `展示整个平台的店主账号信息，可对店主进行分组，设置不同的商品折扣价`
  },
  {
    key: '订单管理',
    value: `展示整个平台的订单信息，可以查看不同店铺的单量与订单金额，以及客户订单的实时状态`,
  },
  {
    key: '退款管理',
    value: `展示整个平台的退款订单信息，可以查看不同店铺的退款单量与订单金额，以及退款状态`,
  },
  {
    key: '营销管理',
    value: `为代购端app配置营销活动与优惠政策等内容`
  },
  {
    key: 'APP内容管理',
    value: `为代购端app配置分享文章、广告图、活动商品等内容`
  },
  {
    key: '财务管理',
    value: `审核代购提现金额，展示提现记录，支持微信、支付宝、中国地区银行卡、欧洲地址银行卡提现`
  },
  {
    key: '模型管理',
    value: `为商品添加不同的商品属性与商品规格，配置好模型后，直接使用该模型，方便后续添加商品`
  },
  {
    key: '分类管理',
    value: `为商品配置不同的分类，方便采购、运营、用户筛选分类，尽快找到需要的商品`
  },
  {
    key: '商品管理',
    value: `为整个平台的商品管理，添加/编辑/删除商品详细信息，为代购提供大量的商品池`
  },
  {
    key: '运价管理',
    value: `为整个平台的下单配置快递方式、以及不同的运费管理`
  },
]

const goodsImgList = [
  'platform-1.png',
  'platform-2.png',
];



function SolutionPlatform() {
  return <div className='solution'>
    <Head>
      <title>
        运营商功能——解决方案|S2B2C供应链模式|易代购——最好的代购技术解决方案
      </title>
      <meta
        name="keywords"
        content="易代购, 员工管理，客户管理，店主管理，订单管理，退款管理，营销管理，APP内容管理，财务管理，模型管理，分类管理，商品管理，运价管理"
      />
      <meta
        name="description"
        content="易代购解决方案中运营商功能列表"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `,
        }}
      ></script>
    </Head>
    <div className="w-full bg-center header-top-banner flex justify-around items-center max-lg:flex-col">
      <div className="p-10 pb-0 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl mb-4">S2B2C供应链模式</h1>
        <p className="text-base">运营方：提供货源，物流渠道</p>
        <p className="text-base">代购卖家：选品、开店、卖货</p>
        <p className="text-base">代购买家：买货、付款、收货</p>
      </div>
      <div>
        <img src="/images/solution/banner-2.png" />
      </div>
    </div>

    <div className="mb-10">
      <h2 className="text-second-primary text-2xl text-center my-10">运营方功能</h2>
      <div className="deploy-demand">
        {deployDemand.map((e, i) =>
          <div className="deploy-demand-item" key={e.key}>
            <span>{e.key}</span>
            <p>{e.value}</p>
          </div>
        )}
      </div>
    </div>

    <div className="bg-primary py-24">
      <Swiper
        spaceBetween={10}
        onSlideChange={() => console.log('slide change')}
        navigation
        pagination
        className="container swiper-img"
        simulateTouch
      >
        {goodsImgList.map((item) => (
          <SwiperSlide key={item}>
            <img
              className="mx-auto"
              src={`/images/carousel/${item}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
}

export default SolutionPlatform