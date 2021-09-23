import Head from 'next/head'
import Link from 'next/link'


function Solution() {
  return <div className='solution'>
    <Head>
      <title>
        解决方案|S2B2C供应链模式|易代购——最好的代购技术解决方案
      </title>
      <meta
        name="keywords"
        content="易代购, 代购系统, S2B2C， 给代购供货的开店的系统"
      />
      <meta
        name="description"
        content="玩转代购的商业模式，解决方案"
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

    <div className="mx-auto flex items-center justify-center py-10 my-10 border-solid border border-red-200 max-sm:border-none" style={{ maxWidth: '1200px' }}>
      <h3 className="text-primary ml-2">商业模式</h3>
      <div>
        <h3 className="text-second-primary font-bold ml-4 text-2xl">什么是S2B2C供应链模式？</h3>
        <p className="ml-4">通过供应链平台（S），提供海量货源给到渠道商 / 采购商（B），结合互联网技术，赋能B端完成对C端消费者的服务，培育出一个
全新的赋能平台。</p>
        <img className="max-sm:hidden" src="/images/solution/pattern.png" />
        <img className="hidden max-sm:block" src="/images/solution/pattern-mobile.png" />
      </div>
    </div>

    <div className="p-10 max-sm:p-5" style={{ backgroundColor: '#F3F3F3' }}>
      <div className="process">
        <h2 className="text-second-primary text-2xl text-center my-5">操作流程图</h2>
        <div className="">
          <div className="process-container">
            <div className="left-bg" style={{ backgroundColor: '#FFB4B4' }}></div>
            <div className="flex justify-center items-center flex-col my-5">
              <img src="/images/home/platform.png" />
              <p className="text-second-primary">运营方</p>
            </div>
            <div className="item-1" style={{ padding: 0 }}>
              <div className="item-box-1">
                <span>开发货源渠道</span>
                <span>开发物流渠道</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-1"></div>
                <div className="item-box-2"></div>
                <div className="item-box-3"></div>
              </div>
              <div className="item-box-1">
                <span>定价上货</span>
                <span>营销方案</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-1"></div>
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>发布商品</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>发货</span>
              </div>
            </div>
          </div>
          <div className="process-container">
            <div className="left-bg" style={{ backgroundColor: '#DB3939' }}></div>
            <div className="flex justify-center items-center flex-col my-5">
              <img src="/images/home/seller.png" />
              <p className="text-second-primary">代购</p>
            </div>
            <div className="item-1">
              <div className="item-box-1">
                <span>认证</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>选品</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>定价</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>推广</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>赚佣金</span>
              </div>
            </div>
          </div>
          <div className="process-container">
            <div className="left-bg" style={{ backgroundColor: '#7FCDBF' }}></div>
            <div className="flex justify-center items-center flex-col my-5">
              <img src="/images/home/buyers.png" />
              <p className="text-second-primary">运营方</p>
            </div>
            <div className="item-1">
              <div className="item-box-1">
                <span>选品</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>下单</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>付款</span>
              </div>
              <div className="item-box-line">
                <div className="item-box-2"></div>
              </div>
              <div className="item-box-1">
                <span>收货</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="chat-img-container grid grid-cols-3 max-sm:grid-cols-1 items-center" style={{ backgroundImage: 'linear-gradient(0deg, #4A4C68 ,#4A4C68 29%,#E64949 29%,#E64949 74% , #4A4C68 74%,#4A4C68)' }}>
      <img className="mx-auto" src="/images/solution/t1.png" />
      <img className="mx-auto" src="/images/solution/t2.png" />
      <img className="mx-auto" src="/images/solution/t3.png" />
    </div>

    <div className="p-10" style={{ backgroundColor: '#F3F3F3' }}>
      <h2 className="text-second-primary text-2xl text-center mb-10">功能列表</h2>
      <div className="container grid grid-cols-3 mx-auto gap-4 max-sm:grid-cols-1">
        <Link href="/solution-platform">
          <img className="mx-auto cursor-pointer" src="/images/solution/yyf.png" />
        </Link>
        <Link href="/solution-seller">
          <img className="mx-auto cursor-pointer" src="/images/solution/dgmj.png" />
        </Link>
        <Link href="/solution-buyer">
          <img className="mx-auto cursor-pointer" src="/images/solution/zdmj.png" />
        </Link>
      </div>
    </div>
  </div>
}

export default Solution