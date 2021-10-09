import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

const routerList = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/price',
    name: '解决方案',
  },
  {
    path: '/contact',
    name: '关于我们',
  },
  {
    path: 'https://test-h5.dingcandawang.com/',
    name: '立即体验',
  },
];

function Header(props) {
  const {
    router: { pathname },
    toggle,
  } = props;
  const [show, switchShow] = useState(false);
  useEffect(() => {
    const listener = () => {
      const shouldShow = window.scrollY > 5;
      if (shouldShow !== show) {
        switchShow(shouldShow);
      }
    };
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, [show]);

  return (
    <div className={`header bg-white top-0 w-full ${show ? 'header-move-color' : ''}`}>
      <div className={`px-5 max-md:p-3 max-2xl:px-10 flex container justify-between items-center mx-auto`} style={{height: '60px'}}>
        <div className="flex items-center">
          <img src="/images/logo.png" style={{ width: '55px', height: '55px' }} alt="" />
          <span className="ml-1 font-bold text-lg">订餐大王</span>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center list-none">
            {routerList.map((item) => (
              <li
                key={item.path}
                className={`float-left font-bold px-6 ${item.path === 'https://test-h5.dingcandawang.com/' ? 'experience-btn' : ''}`}
              >
                <Link href={item.path}>
                  <a className={`${pathname == item.path ? 'text-fourth-primary' : 'text-second-primary'}`} target={`${item.path =='https://test-h5.dingcandawang.com/' ? '_blank' : ''}`}>{item.name}</a>
                </Link>
              </li>
              
            ))}
          </ul>
        </div>
        <div onClick={() => toggle()} className="hidden max-md:block" style={{  }}>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
