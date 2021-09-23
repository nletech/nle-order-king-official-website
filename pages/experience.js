import Head from "next/head";
import { Map, Marker } from 'react-amap'

function Experience() {
  return <div className='experience'>
    <Head>
      <title>
        系统演示|代购系统演示下载|易代购——最好的代购技术解决方案
      </title>
      <meta
        name="keywords"
        content="易代购, 代购系统，代购系统演示，代购供货系统体验"
      />
      <meta
        name="description"
        content="易代购系统演示"
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
        <h1 className="text-5xl mb-4">系统演示&体验</h1>
        <p className="text-base">我们希望代购解决方案，就像咪了个瞄一样的简单好用</p>
      </div>
      <div>
        <img src="/images/experience/banner-4.png" />
      </div>
    </div>

    <div style={{ maxWidth: '1200px' }} className="py-10 px-5 mx-auto">
      <h2 className="text-second-primary text-2xl mb-10 text-center">我们希望解决方案，就像咪了个瞄一样的简单好用</h2>
      <p className="text-second-primary mb-12 text-center">"咪了个瞄" 为易代购的APP项目名称，该项目仅为演示效果项目，本身并不参与经营和正式发货，请不要在上面进行充值，和真实购买。</p>
      <div className="grid grid-cols-2 text-second-primary">
        <div className="mx-auto text-center">
          <img style={{ maxWidth: '160px' }} src="/images/experience/ios.jpg" />
          <p className="mt-4">IOS下载</p>
        </div>
        <div className="mx-auto text-center">
          <img style={{ maxWidth: '160px' }} src="/images/experience/mini.jpg" />
          <p className="mt-4">微信小程序演示</p>
        </div>
      </div>
    </div>

    <div className="container grid grid-cols-2 max-sm:grid-cols-1 my-14">
      <img src="/images/experience/admin.png" style={{ margin: '0 0 0 auto' }} />
      <div className="text-white py-5 px-10 bg-primary">
        <p className="mb-5">后台管理帐号索取及演示</p>
        <p>为了提高沟通效率，确保您真实想使用此方案，减少不必要的演示麻烦，请提供您公司的营业
        执照及公司介绍，方便为您提供更加精准的方案介绍，同时我们也将安排免费的演示时间。
        如果您无法提供以上信息，我们需要收取500元每次的演示费用（正式签约后，演示费用可以
退还），时间控制在1个小时内。</p>
      </div>
    </div>

  </div>
}

export default Experience