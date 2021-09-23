import Head from 'next/head'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const goodsImgList = [
  'seller-1.jpg',
  'seller-2.png',
  'seller-3.png',
  'seller-4.png',
  'seller-5.png',
  'seller-6.png',
];



function Solution() {
  return <div className='solution'>
    <Head>
      <title>
        运营商功能——代购卖家|S2B2C供应链模式|易代购——最好的代购技术解决方案
      </title>
      <meta
        name="keywords"
        content="易代购, 代购卖家，店铺设计，订单管理，优惠券，收藏夹，数据统计，店铺优惠，我的商品，APP界面预览"
      />
      <meta
        name="description"
        content="易代购解决方案中代购卖家功能列表"
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
      <h2 className="text-second-primary text-2xl text-center my-10">代购卖家</h2>
      <div className="table-container">
        <div className="table-left-key">
          <div className="seller-table-key">
            <p className="single">首页</p>
            <p className="value-0">展示运营方最新上架的新品及推荐的商品，广告图，可以按分类进行过滤</p>

            <span className="title">店铺</span>
            <span className="subtitle-1">店铺设计</span>
            <span className="subtitle-2">订单管理</span>
            <span className="subtitle-3">优惠券</span>
            <span className="subtitle-4">收藏夹</span>
            <span className="subtitle-5">数据统计</span>
            <span className="subtitle-6">店铺优惠</span>
            <span className="subtitle-7">我的商品</span>

            <p className="value-1">系统初始化内置了一套标准的终端店铺风格，将来可扩展到多套店铺风格，同时也可以分享店铺到朋友圈，生成店铺二维码，发到微信好友上面</p>
            <p className="value-2">可以按查看全部订单，待支付订单，待发货订单，已发货订单，同时也可以区分自己下的订单和客人下的订单，查看代购订单详细</p>
            <p className="value-3">可以自己添加优惠券，设置优惠券，并分享优惠给到个人，也可以限定到某些分类，某些品牌，可以设置为抵现券，折扣券</p>
            <p className="value-4">对喜好的商品进行收藏管理，可以添加，删除喜欢关注的商品</p>
            <p className="value-5">可以进行交易统计，销售额统计</p>
            <p className="value-6">升级代购店铺级别，代购提现</p>
            <p className="value-7">管理已经选品的商品，进行商品的上架，下架管理，同时也可以对商品进行定价的设置，分享商品给他人，也可以下载分享素材</p>

            <p className="single-2">商品</p>
            <p className="value-8">选品，上架，下架，设置价格，分享素材，分享商品到微信好友，分享二维码，分享海报</p>
          </div>

          <div className="second-table-key">
            <p className="single">分享</p>
            <p className="value-0">这块区域是运营方发布的一些品牌的软文，方便代购卖家进行营销活动，分享给好友</p>

            <span className="title">我的</span>
            <span className="subtitle-1">我的资产</span>
            <span className="subtitle-2">我的地址</span>
            <span className="subtitle-3">我的发票</span>
            <span className="subtitle-4">我的客服</span>
            <span className="subtitle-5">我的消息</span>
            <span className="subtitle-6">完善资料</span>
            <span className="subtitle-7">设置</span>
            <span className="subtitle-8">关于</span>

            <p className="value-1">查看待结算的收益，可提现的收益，已提现的记录，已支付的费用，提现可以定制到银行转帐，支付宝转帐之类的</p>
            <p className="value-2">分为收货地址与发货地址，进行地址管理的增删改查</p>
            <p className="value-3">下载对应的发票（形式发票）到手机上面</p>
            <p className="value-4">我的客服，主要显示是运营方客服的微信，可以保存到相册，同时里面也有相应的FAQ</p>
            <p className="value-5">我的消息，收取各类运营方，订单相关的消息</p>
            <p className="value-6">个人资料填写修改，如类型是公司或个人，如公司名字，个人名字，联系方式等</p>
            <p className="value-7">修改密码，消息推送开关，清除缓存</p>
            <p className="value-8">显示运营方的介绍信息</p>
          </div>
        </div>
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

export default Solution