import Head from "next/head";
import PowerTeam from './power-team'
import { Map, Marker } from 'react-amap'

const serviceCotent = [
  {
    name: '咨询服务',
    src: 'consult.png',
    desc: '基于信息化角度对客户业务发展和未来战略进行专业分析，业务流程梳理和优化，系统蓝图规划，系统上线实施策略等。'
  },
  {
    name: '方案设计',
    src: 'order.png',
    desc: '我司咨询顾问在物流信息化和供应链相关业务领域有着近20年的丰富实践经验，能够深入了解用户需求，挖掘企业现存运营及管理难点，痛点，针对性提供全面的信息化建设方案包括系统架构和功能规划，系统集成方案，项目实施规划等。'
  },
  {
    name: '实施服务',
    src: 'area.png',
    desc: '我司的实施服务通过科学的实施方法，严格的质量保障体系，快速的实施步骤，实现项目成功落地，并帮助企业实现产品应用价值的最大化。'
  },
  {
    name: '集成服务',
    src: 'set.png',
    desc: '我们与众多知名度的软硬件企业紧密合作，为企业提供智能化的全渠道部署，同时为客户提供系统方案设计，网络系统设计，数据采集设备方案设计等综合的系统集成方案。'
  },
]

function About() {
  return <div className='about'>
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
    <div className="w-full bg-center header-top-banner flex justify-evenly items-center max-lg:flex-col">
      <div className="p-5 flex flex-col">
        <h1 className="text-5xl font-bold ">订餐大王</h1>
        <p className="text-base font-normal my-10">做外卖，做线上订餐，有了订餐大王系统，省事省时方便多</p>
        <a href='https://test-h5.dingcandawang.com/' target="_blank" className="experience-btn">立即体验</a>
      </div>
      <div>
        <img src="/images/home/banner-img.jpg" />
      </div>
    </div>
    <div className="mx-auto p-5" style={{ maxWidth: '1088px' }}>
      <div className="mx-auto text-center">
        <h3 className="text-5xl font-bold my-5 mx-auto">关于我们</h3>
      </div>
      <p className="mb-10">湖南恩尔伊网络科技有限公司（以下简称恩尔伊科技）成立于2016年，以跨境国际物流信息化建设者，跨境国际物流智能化开拓者为公司规模，是一家专注于跨境电恩尔伊科技创业之初已经在跨境物流行业有了十多年的运营经验和十年多互联网软件开发经验，同时软件产品已经成熟运行海外市场多年。</p>
      <p className="mb-10">恩尔伊科技定位于为跨境物流电商企业提供一整套的软硬件平台的解决方案，自成立为，与各海外运营不断的努力创新，成功完成了众多信息化项目，从而形成了完善的产品体系解决方案。</p>
      <p className="mb-10">恩尔伊科技研发总部位于长沙高新区麓谷企业广场C3栋。在欧洲荷兰也有合作公司和办事处，恩尔伊科技致力于跨境国际物流电商整体解决方案的建设，诚邀有志于跨境界国际物流电商事业部的各路英才合作。</p>
      <p>更多详细资料，请访问<a href="http://www.nle-tech.com" target="_blank" className="Official-website">恩尔伊官网</a></p>
    </div>


    <div className="container mx-auto p-5">
      <div className="text-center mb-20"><h3 className="text-5xl font-bold my-5">服务内容</h3></div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 mx-auto gap-24">
        {serviceCotent.map(e =>
          <div className="max-w-xl mx-auto" key={e.name}>
            <div className="flex items-center">
              <div className="w-full flex justify-between items-center pb-2 border-fifth-primary" style={{ borderBottomWidth: '5px' }}>
                <h3 className="text-2xl font-bold">{e.name}</h3>
                <img src={`../images/about/${e.src}`} style={{ width: '32px', height: '32px' }} />
              </div>
            </div>
            <p className="mt-4 ml-5 leading-10">{e.desc}</p>
          </div>
        )}
      </div>
    </div>
    <PowerTeam />

    {/* <div className="container mx-auto grid grid-cols-2 max-lg:grid-cols-1 p-5 my-10 items-center m-5 border max-lg:border-none" style={{ borderColor: '#FFE7E7' }}>
      <div className="text-second-primary">
        <h2 className="text-xl font-bold mb-10">中国</h2>
        <div className="my-5">
          <h4>联系电话：</h4>
          <p className="font-bold">15576601706</p>
        </div>
        <div className="my-5">
          <h4>电子邮件：</h4>
          <p className="font-bold">support@nle-tech.com</p>
        </div>
        <div className="my-5">
          <h4>公司地址：</h4>
          <p className="font-bold">湖南省长沙市岳麓区麓谷企业广场C3栋808室</p>
        </div>
      </div>
      <div className="" style={{ height: '343px' }}>
        <Map amapkey="4d660762bc0f68294aeb675306773147" center={[112.886341, 28.20768]} resizeEnable={true} version="1.4.15" title="恩尔伊" zoom={16}>
          <Marker position={[112.886341, 28.20768]} />
        </Map>
      </div>
    </div> */}
  </div>
}

export default About