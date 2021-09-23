import React from 'react';
import { withRouter } from 'next/router';
import { AsideIsOpenContext } from '../../components/asideIsOpenContext';
import Link from 'next/link';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routerList: [
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
          path: 'https://test-h5.aries.nle-tech.com/#/',
          name: '免费体验',
        },
      ],
    };
  }
  render() {
    const {
      router: { pathname },
      toggle,
    } = this.props;
    const { routerList } = this.state;
    return (
      <AsideIsOpenContext.Consumer>
        {(isOpen) => (
          <div className={`aside ${isOpen ? 'open' : ''}`}>
            <div className="aside-nav">
              <div className="nav-list">
                {routerList.map((item) => (
                  <Link href={item.path} key={item.path}>
                    <div
                      onClick={() => toggle()}
                      className={`item ${item.className} ${pathname == item.path ? 'link-active' : ''
                        }`}
                    >
                    <a>{item.name}</a>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </AsideIsOpenContext.Consumer>
    );
  }
}

export default withRouter(Aside);
