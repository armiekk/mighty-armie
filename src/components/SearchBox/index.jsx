import React from 'react';
import {} from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './index.css';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="ค้นหา..." />
      </div>
    );
  }
}

export default SearchBox;
