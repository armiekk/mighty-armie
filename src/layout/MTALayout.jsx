import React from 'react';
import Helmet from 'react-helmet';

import config from '../../data/SiteConfig';
import './index.css';

import MenuItem from '../components/MenuItem';

class MTALayout extends React.Component {
  state = {
    menuList: [
      { name: 'Blog', link: '/' },
      { name: 'My Music', link: '/music' },
      { name: 'About Me', link: '/about' }
    ]
  };

  render() {
    const { children, currentPath } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className="page-wrapper">
          <div className="page-sidebar">
            <img
              src="/logos/mighty-armie-logo.svg"
              className="page-logo"
              alt="logo"
            />
            <div className="menu-list">
              {this.state.menuList.map((item, i) => (
                <MenuItem
                  key={i}
                  path={item.link}
                  actived={currentPath === item.link}
                >
                  {item.name}
                </MenuItem>
              ))}
            </div>
          </div>
          <div className="content-wrapper">{children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MTALayout;
