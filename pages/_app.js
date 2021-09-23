import React, { useState } from 'react';
import Head from "next/head";
import { AsideIsOpenContext } from '../components/asideIsOpenContext';
import CHeader from '../components/header/header';
import CFooter from '../components/footer/footer';
import Aside from '../components/aside/aside';
import '../components/aside/aside.scss';
import "../styles/globals.scss";
import "../styles/index.scss";
import "../styles/solution.scss";
import '../styles/about.scss'
import '../styles/price.scss'
import 'tailwindcss/tailwind.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


function MyApp({ Component, pageProps }) {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      document.getElementById('__next').style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.getElementById('__next').style.overflow = 'initial';
      document.body.style.overflow = 'initial';
    }
  };

  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta httpEquiv="cleartype" content="on" />
      <meta name="author" content="nletech" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="nletech" />
      <meta name="apple-touch-icon" content="/dcdw.ico" className="w-20" />
      <meta name="msapplication-TileImage" content="/dcdw.ico" className="w-20" />
      <meta name="msapplication-TileColor" content="#0088f5" />
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
      />
      <link rel="shortcut icon" href="/dcdw.ico" className="w-20" />
    </Head>

    <div id="app-aside" className={isOpen ? 'open' : ''}>
      <AsideIsOpenContext.Provider value={isOpen}>
        <Aside toggle={toggle} />
      </AsideIsOpenContext.Provider>
    </div>

    <div className={`main ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="close-mask" onClick={() => toggle()}></div>
      ) : null}
      <CHeader toggle={toggle}></CHeader>
      <Component {...pageProps} />
      <CFooter></CFooter>
    </div>
  </>
}

export default MyApp
