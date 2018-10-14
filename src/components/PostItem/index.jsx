import React from 'react';
import { Link } from 'gatsby';
import TimeAgo from 'react-timeago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarAlt,
  faTags
} from '@fortawesome/free-solid-svg-icons';

import './index.css';

import thaiStrings from 'react-timeago/lib/language-strings/th';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(thaiStrings);

class PostItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="post-item">
        <Link to={data.path}>
          <div className="thumbnail">
            <img src={data.thumbnail} alt={data.title} />
          </div>
        </Link>
        <div className="description">
          <div className="post-desc-header">
            <div className="title">
              <Link to={data.path} key={data.title}>
                <h1>{data.title}</h1>
              </Link>
            </div>
            <div className="meta">
              <FontAwesomeIcon icon={faUser} />
              &nbsp;
              <span>{data.author}</span> &nbsp; | &nbsp;&nbsp;
              <FontAwesomeIcon icon={faCalendarAlt} />
              &nbsp;
              <TimeAgo date={data.date} formatter={formatter} />
            </div>
            <div
              className="detail"
              dangerouslySetInnerHTML={{ __html: data.excerpt }}
            />
          </div>
          <div className="tags">
            {data.tags.map((tag, i) => (
              <span key={i} className="tag">{`#${tag}`}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
