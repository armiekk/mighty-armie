import React from 'react';
import { Link } from 'gatsby';

import './index.css';

// component
import MenuIndicator from '../MenuIndicator';

class MenuItem extends React.Component {
  state = {
    isHover: false
  };

  render() {
    const { isHover } = this.state;
    const { children, path, actived } = this.props;
    return (
      <Link
        to={path || '/#'}
        className="menu-item"
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <strong>{children}</strong>
        <MenuIndicator
          isActived={actived}
          pose={isHover ? 'mouseIn' : 'mouseOut'}
        />
      </Link>
    );
  }
}

export default MenuItem;
