import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../layout/MTALayout';
import config from '../../data/SiteConfig';

class Music extends React.Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <Layout currentPath={pathname}>
        <Helmet title={`Music | ${config.siteTitle}`} />
        <div>test</div>
      </Layout>
    );
  }
}

export default Music;
