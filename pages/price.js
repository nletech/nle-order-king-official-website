import Head from 'next/head'

const listImg =[{
  img:'ct.png',
  name:"餐厅外卖"
},
{
  img:'st.png',
  name:"食堂外卖"
},
{
  img:'cs.png',
  name:"超市外卖"
},
{
  img:'sg.png',
  name:"水果店外卖"
},
{
  img:'mb.png',
  name:"面包店外卖"
},
{
  img:'nc.png',
  name:"奶茶店外卖"
},
]
const painPoints1=[{
  img:'td1.png',
  name:"下单自提点无需填写联系方式， 仅需微信或Whatsup群与昵称； 取餐时直接群联系。"
},
{
  img:'td2.png',
  name:"支持外卖送餐上门，谷歌地图全球定位支持，精准计算派送距离与外卖送餐费。"
},
{
  img:'td3.png',
  name:"支持店取外卖，用户可以提前下单，选择在店支付，到店后取餐付款。"
},
]
const painPoints2=[
{
  img:'td4.png',
  name:"英文版订餐界面，解决语言障碍问题，可支持多语言，自由切换。"
},
{
  img:'td5.png',
  name:"多种线上支付方式对接与线下支付；币种切换，顺应当地币种。"
},

]
const deployDemand = [
  {
    key: '项目',
    value: '独立部署'
  },
  {
    key: '服务器',
    value: `至少需要一台8G内存 四核CPU以上服务器，预计费用在8000元每年以上`
  },
  {
    key: '带宽',
    value: `5M以上`
  },
  {
    key: '缓存服务',
    value: `推荐 云REDIS，费用预计需要 2000元/年 `,
    value2: `如果不使用，需要将服务器配置加大一点`,
  },
  {
    key: '数据库',
    value: `推荐 RDS，费用预计4000元/年 `,
    value2: `如果不使用，需要将服务器配置加大一点`,
  },
  {
    key: '域名',
    value: `80元/年`
  },
  {
    key: 'SSL证书',
    value: `推荐 5000元/年（OV证书）`
  },
  {
    key: '维护',
    value: `自行维护，定期升级`
  },
  {
    key: '服务器投入',
    value: `大于15000/年以上`
  },
]

const priceTable = [
  {
    key: '管理后台',
    type: 1,
    normal: 'hook',
    business: 'hook'
  },
  {
    key: 'H5',
    type: 1,
    normal: 'hook',
    business: 'hook'
  },
  {
    key: 'Api文档',
    type: 1,
    normal: 'hook',
    business: 'hook'
  },
  {
    key: '更换LOGO',
    type: 1,
    normal: 'hook',
    business: 'hook'
  },
  {
    key: '更换颜色',
    type: 1,
    normal: 'hook',
    business: 'hook'
  },
  {
    key: '二次开发文档',
    type: 1,
    normal: 'hook',
    business: 'close'
  },
  {
    key: '提供源码',
    type: 1,
    normal: 'hook',
    business: 'close'
  },
  {
    key: '定制开发服务',
    type: 0,
    normal: '1200元/天/人',
    business: '1200元/天/人'
  },
  {
    key: '定制UI界面',
    type: 0,
    normal: '2000元',
    business: '2000元'
  },
  {
    key: '永久费用',
    type: 0,
    normal: '15800元',
    business: '6800元'
  },
  // {
  //   key: '续年费用',
  //   type: 0,
  //   normal: '20%（合同价）',
  //   business: '20%（合同价）'
  // },
]

function IntegrationOfWarehouse() {
  return <div className='integrated'>
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
    <div className="w-full bg-center header-top-banner flex justify-center items-center max-lg:flex-col">
      <div className="p-5 flex flex-col">
        <h1 className="text-5xl font-bold">订餐大王外卖订餐系统软件解决方案</h1>
        <p className="text-base font-normal my-10">多语言切换，多币种，多种线支付方式，微信朋友圈轻松下单，</p>
        <p className="text-base font-normal mb-10">简单实用，上线只需要一天</p>
        
        <a href='https://test-h5.dingcandawang.com/'target="_blank" className="experience-btn">立即体验</a>
      </div>
      <div>
      <img src="/images/home/banner-img.jpg"/>
      </div>
    </div>

    <div className="mb-10">
      <h2 className="text-second-primary text-2xl text-center my-10 font-normal">适用场景</h2>
      <div className="lg:py-5 text-second-primary md:container grid gap-10 grid-cols-6 justify-between my-10 mx-auto max-sm:flex-col max-lg:grid-cols-3">
        {
          listImg.map(item => <div className="list-img mx-auto max-w-xs" key={item.name}>
            <img className="mx-auto" src={`../images/price/${item.img}`} />
            <h2 className="my-4 text-center  font-bold">{item.name}</h2>
          </div>)
        }
      </div>
      <div className='top-banner h-full' >
      <h2 className="text-second-primary text-2xl text-center font-normal text-fourth-primary pt-10 ">海外版外卖订餐系统专属功能</h2>
      <div className="text-white md:container grid gap-10 grid-cols-3 justify-between my-5 mx-auto max-sm:flex-col max-lg:grid-cols-1">
        {
          painPoints1.map(item => <div className="list-img mx-auto max-w-xs" key={item.name}>
            <img className="mx-auto" src={`../images/price/${item.img}`} />
            <h2 className="mt-4 font-bold w-64">{item.name}</h2>
          </div>)
        }
      </div>
      <div className="lg:pb-20 text-white md:container flex justify-evenly  my-5 mx-auto max-sm:flex-col max-lg:flex-col">
        {
          painPoints2.map(item => <div  key={item.name}>
            <img className="mx-auto" src={`../images/price/${item.img}`} />
            <h2 className="my-4 font-bold mx-auto w-64">{item.name}</h2>
          </div>)
        }
      </div>
      </div>
      <h2 className="text-second-primary text-2xl text-center font-normal my-10 ">独立部署成本</h2>
      <div className="deploy-demand">
        {deployDemand.map((e, i) =>
          <div className="deploy-demand-item" key={e.key}>
            <span style={{ backgroundColor: i === 0 ? '#FFF7DA' : '' }}>{e.key}</span>
            <p style={{ backgroundColor: i === 0 ? '#FFF7DA' : '' }}>{e.value} {e?.value2}</p>
          </div>
        )}
      </div>
      
    </div>

    <div className=" bg-fourth-primary pb-20 px-36  max-lg:p-0 " >
      <p className="font-normal text-2xl text-center py-5"> 价格对比</p>
      <div className="price-table bg-white">
        {/* <div className="header-img bg-cover bg-center	 flex justify-center items-center text-white text-2xl" style={{ backgroundImage: `url('/images/price/fit.png')`, height: '107px' }}>什么样的部署方式更适合您？</div> */}
        <div className="price-table-item price-table-header">
          <span className="price-table-cell font-bold" style={{ backgroundColor: '#FFF7DA' }}>支持目录</span>
          <span className="price-table-cell" style={{ backgroundColor: '#FFF7DA' }}>
            <h4 className="font-bold">企业版本</h4>
            <div>
              <h6 className="font-normal mr-1">永久</h6>
              <h2 className="md:text-5xl">15800￥</h2>
            </div>
          </span>
          <span className="price-table-cell bg-second-primary " style={{ backgroundColor: '#FFF7DA'}}>
            <h4 className="font-bold">标准版本</h4>
            <div>
              <h6 className="font-normal mr-1">永久</h6>
              <h2 className="md:text-5xl">6800￥</h2>
            </div>
          </span>
        </div>
        {priceTable.map((e, i) =>
          <div className="price-table-item" key={e.key}>
            <span className="key">{e.key}</span>
            {e.type === 1 ? <><span><img src={`/images/price/${e.normal}.png`} /></span><span><img src={`/images/price/${e.business}.png`} /></span></> : <><span>{e.normal}</span>
              <span>{e.business}</span></>
            }
          </div>
        )}
        {/* <div className="price-table-bottom">
          <span>* 以上报价不包含服务器，短信，邮箱 费用</span>
        </div> */}
      </div>
    </div>
  </div >
}

export default IntegrationOfWarehouse