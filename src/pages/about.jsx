import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/MTALayout';
import About from '../components/About/About';
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <Layout currentPath={pathname}>
        <Helmet title={`About | ${config.siteTitle}`} />
      </Layout>
    );
  }
}

export default AboutPage;
