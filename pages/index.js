import Head from 'next/head'
import Link from 'next/link'
import PowerTeam from './power-team'

const listImg = [
  {
    name: '订餐后台',
    desc: `轻松添加外卖商品分类，设置外卖商品信息，上架商品即可售卖。首页一览外卖售卖情况；订单列表查看所有订单，并打印外卖标签；餐馆信息、支付方式、派送方式等配置，灵活运营订餐后台。`,
    img: 'platform.png'
  },
  {
    name: '订餐买家（H5/小程序/APP）',
    desc: `在微信群点击外卖下单链接，选择商品购买，支持外卖店取、自提点、送货上门，谷歌地图精准计算派送距离。使用余额、微信、支付宝、ideal、银行卡等在线支付，同时也支持线下交易支付。`,
    img: 'seller.png'
  },
]

const adminList = [
  {
    name: '用户管理',
    desc:"可以添加外卖用户，给外卖用户进行余额充值或扣款；可以添加登录订餐后台的员工账号，并设置员工访问权限等。",
    img: 'admin-1.png'
  },
  {
    name: '订单管理',
    desc:"查看历史订单记录，打印外卖订单标签，导出外卖订单数据；查看外卖用户退款记录，审核退款状态与退款金额等。",
    img: 'admin-2.png'
  },
  {
    name: '商品管理',
    desc:"设置外卖商品分类与外卖商品信息，让用户更直观的选购美味的外卖商品；可以设置预售外卖活动，预定日期提前下单。",
    img: 'admin-3.png'
  },
  {
    name: '设置管理',
    desc:"设置餐馆基本信息；设置3种下单方式：外卖固定自提点、外卖送货上门、店取；设置6种支付方式。",
    img: 'admin-4.png'
  },
]
const imgList = [
  {
    name: '订餐首页',
    desc:"顶部查看订餐餐馆信息，浏览外卖菜单，选购外卖商品。",
    img: 'img-1.png'
  },
  {
    name: '商品详情页',
    desc:"查看商品详情页，挑选规格，区分不同规格组商品，满足不同组合。",
    img: 'img-2.png'
  },
  {
    name: '下单页面',
    desc:"支持自提点、送货上门、店取；填写群与昵称，取餐直接微信联系。",
    img: 'img-3.png'
  },
  {
    name: '支付页面',
    desc:"支持多种线上支付方式；同时也支持取餐现金交易或到店支付。",
    img: 'img-4.png'
  },
  {
    name: '我的界面',
    desc:"查看订单记录、地址库管理，支持余额充值与余额记录查询。",
    img: 'img-5.png'
  },
]
export default function Home() {
  return (
    <div>
      <Head>
        <title>
        订餐系统|外卖系统|订餐APP|海外订餐APP|微信订餐系统|订餐外卖软件解决方案—订餐大王
        </title>
        <meta
          name="keywords"
          content="订餐系统|外卖系统|订餐APP|海外订餐APP|微信订餐系统|订餐外卖软件解决方案—订餐大王"
        />
        <meta
          name="description"
          content="订餐系统|外卖系统|订餐APP|海外订餐APP|微信订餐系统|订餐外卖软件解决方案—订餐大王"
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
      <div className="w-full bg-center header-top-banner flex justify-evenly items-center  max-lg:flex-col">
        <div className="p-5 flex flex-col" >
          <h1 className="text-5xl font-bold">外卖系统海外版，英文版订餐系统 </h1>
          <p className="text-base font-bold py-10">订餐大王 — — 一套简单实用的海外订餐外卖系统</p>
        <a href='https://test-h5.dingcandawang.com/'target="_blank" className="experience-btn">立即体验</a>
        </div>
        <div>
          <img src="/images/home/banner-img.jpg"/>
        </div>
      </div>
      <div className="lg:py-20 text-second-primary md:container grid gap-10 grid-cols-2 justify-between my-10 mx-auto max-sm:flex-col max-lg:grid-cols-1">
        {
          listImg.map(item => <div className="list-img mx-auto max-w-xs" key={item.name}>
            <img className="mx-auto" src={`../images/home/${item.img}`} />
            <h2 className="my-4 text-center  font-bold">{item.name}</h2>
            <p className="">{item.desc}</p>
          </div>)
        }
      </div>
      <div className="grid grid-cols-2 top-banner max-lg:grid-cols-1">
        <div className=" text-2xl text-white text-left m-auto items-center flex-col  max-lg:h-80 p-10 mb-20">
          <p>
            <div>提供强大的订餐后台运营</div>
            <div>系统—为订餐运营提供服务</div>
            <div className="banner-border"></div>
          </p>
          <p className="mt-20">
            <div>提供网页H5</div>
            <div>为买家提供订餐服务</div>
            <div className="banner-border"></div>

          </p>
          <p>
            <div className="banner-gengduo">
             
              <div>
                 <div> 更多介绍</div> 
                <div>
                  <div className="banner-border"></div>
                </div>
              </div>
              <Link href="/price">
              <img src="/images/home/jiantou.png" className="w-36 -ml-8 banner" />
            </Link>
                
            </div>
          </p>
        </div>
        <div className="grid-container text-white max-lg:m-auto ">
          <div className="grid-item-1">
            <img src="/images/home/ptdz.png" />
            <span className="text-white">平台定制</span>
          </div>
          <div className="grid-item-2">
            <img src="/images/home/arlbs.png" />
            <span>私有部署</span>
          </div>
       
          <div className="grid-item-4 font-normal text-third-primary py-10">
            订餐大王解决方案
          </div>
          <div className="grid-item-5">
            <img src="/images/home/zfb.png" className="ml-8" />
            <span>在线支付</span>
          </div>
          <div className="grid-item-6">
            <img src="/images/home/zz.png" />
            <span>谷歌地图</span>
          </div>
          {/* <div className="grid-item-8">
          </div> */}
        </div>
      </div>
      <h2 className="text-5xl my-10 text-center font-normal">订餐系统后台</h2>
      <div className="flex item-center m-auto max-lg:flex-col">
            <img src={`/images/home/bj-1.png`} className="m-auto" />
      </div>
      <div>
      <h2 className="text-xl mt-10 text-center font-normal">订餐系统后台登录界面、首页外卖自提点商品销售数据展示</h2>
      <div className="bg-fourth-primary ">
      <div className="lg:py-20 text-second-primary  md:container grid gap-10 grid-cols-4 justify-between py-10 my-10 mx-auto max-sm:flex-col max-lg:grid-cols-1 ">
        {
          adminList.map(item => <div className="list-img mx-auto max-w-xs" key={item.name}>
            <img className="mx-auto" src={`../images/home/${item.img}`} />
            <h2 className="my-4 text-center  font-bold">{item.name}</h2>
            <p className="">{item.desc}</p>
          </div>)
        }
      </div>
      </div>
        {/* <div className="grid grid-cols-4 justify-center items-center container mx-auto max-lg:grid-cols-1">
          <div className="text-second-primary py-10 px-5">
            <h2 className="text-2xl my-10">订餐系统后台登录界面、首页外卖自提点商品销售数据展示</h2>
            <div className="grid grid-cols-4 gap-10 max-sm:text-sm">
              {adminList.map(item => <div key={item.name}>
                <img src={`/images/home/${item.img}`} />
                <p className="my-3">{item.desc}</p>
                <p className="my-3">{item.name}</p>
              </div>)}
            </div>
          </div>
          
        </div> */}
      </div>
      <div>
      <h2 className="text-5xl pt-10  mb-4 text-center font-normal">外卖订餐界面</h2>
      <div className="text-second-primary md:container px-8 grid gap-10 grid-cols-5 justify-between  mx-auto max-sm:flex-col px-0 max-lg:grid-cols-1 pb-20">
        {
          imgList.map(item => <div className="list-img mx-auto max-w-xs" key={item.name}>
            <img className="mx-auto mb-4 " src={`../images/home/${item.img}`} />
            <h2 className="mb-4 text-center  font-bold">{item.name}</h2>
            <p>{item.desc}</p>
          </div>)
        }
      </div>
        {/* <div className="img-list mx-auto grid grid-cols-5 justify-center max-ll:grid-cols-1">
          <img src="/images/home/img-1.png" />
          <h2>订餐首页</h2>
          <p>顶部查看订餐餐馆信息，浏览外卖菜单，选购外卖商品</p>
          <img src="/images/home/img-2.png" />
          <img src="/images/home/img-3.png" />
          <img src="/images/home/img-3.png" />
          <img src="/images/home/img-3.png" />
        <div className="fourth-primary m-auto pb-12" >
          <div className=" text-center ">
          <h1 className=" text-5xl font-normal mb-8">平台买家</h1>
         <div>
         <img src="/images/home/img-4.png" />
         <div className="-mt-10 text-xl text-white" >首页</div>
         </div>
         <div className="py-4">
         <img src="/images/home/img-4.png" />
         <div className="-mt-10 text-xl text-white">购物车</div>
         </div>
         <div>
         <img src="/images/home/img-4.png" />
         <div className="-mt-10 text-xl text-white">我的</div>
         </div>
          </div>
        </div>
        </div> */}
      </div>
<div className="bg-fifth-primary"> 
  <div style={{ maxWidth: '1088px' }} className="mx-auto p-5 font-normal">
<h2 className="text-5xl py-10 text-center">附带智能订餐系统打印插件</h2>
<p className="font-normal">购买使用订餐大王外卖系统，我们会附带智能订餐系统打印插件，订餐系统软件与硬件打印相结合，安装后，只需打印机USB或蓝牙链接一台电脑，即可开始打印，简短一分钟即可完成外卖订单打印。可远程云打印，餐馆打印机链接好后，在家也可以操作后台，点击打印打印机在接收到订单后便会自动打印出单。</p>
     <div className=" mx-auto max-sm:flex-col "
       >
       <div className="font-normal  text-center"> 
        <img className="m-auto" src="/images/home/cloud.png"/>
        <p className="font-bold -mt-28 text-center">云服务器</p>
     </div>
       <div
       style={{ maxWidth: '740px' }}
        className="border-4 border-solid border-fourth-primary h-8  mx-auto border-b-0 max-lg:border-0 "></div>
         <div className="flex justify-between my-10 max-lg:flex-col ">
         <div>
           <p className="font-bold text-center max-lg:mt-10"> 外卖APP、小程序</p>
           <img className="m-auto" src="/images/home/rice.png" />
         </div>
         <div className="font-normal mt-40 text-2xl text-center max-lg:my-10">自动接单打印流程</div>
         <div>
           <p className="font-bold text-center"> 打印机</p>
           <img className="m-auto" src="/images/home/printer.png" />
         </div>
         </div>
        </div>
</div>

  </div>
    </div >
  )
}
