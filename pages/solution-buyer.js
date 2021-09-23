import Head from 'next/head'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const buyerFeatures = [
  {
    key: '首页',
    value: '显示店主（卖家推荐的商品）广告图为运营方的广告图，推荐的热门商品'
  },
  {
    key: '分类',
    value: `展示系统中所有店主选品的商品分类`
  },
  {
    key: '商品',
    value: `根据分类显示所有的商品，可以按销量，价格，上架时间，筛选显示商品列表`
  },
  {
    key: '优惠券',
    value: `显示所有的优惠券，按未使用，已使用，已过期进行展示`,
  },
  {
    key: '订单',
    value: `选择商品后进行下单，可以使用在线支付，填收清关所需的身份证号码，照片等信息，按订单状态显示相应的订单`,
  },
  {
    key: '个人中心',
    value: `显示全部订单（待付款，待发货，已发货，已完成），个人资料，收货地址，优惠券，消息中心`
  },
  {
    key: '注销/登录',
    value: `可以使用微信登录，手机号注册登录，注销`
  },
]

const goodsImgList = [
  'buyer-1.png',
  'buyer-2.png',
  'buyer-3.png',
  'buyer-4.png',
  'buyer-5.png',
  'buyer-6.png',
];



function SolutionBuyer() {
  return <div className='solution'>
    <Head>
      <title>
        运营商功能——买家功能|S2B2C供应链模式|易代购——最好的代购技术解决方案
      </title>
      <meta
        name="keywords"
        content="易代购, 买家功能，小程序微信H5功能列表"
      />
      <meta
        name="description"
        content="易代购解决方案中代购买家功能列表, 界面预览"
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
      <h2 className="text-second-primary text-2xl text-center my-10">买家功能</h2>
      <div className="deploy-demand">
        {buyerFeatures.map((e, i) =>
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
        className="container swiper-img"
        simulateTouch
        breakpoints={{
          780: {
            slidesPerView: 2,
          },
          1270: {
            slidesPerView: 3,
          },
        }}
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

export default SolutionBuyer