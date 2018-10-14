import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/MTALayout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

import SearchBox from '../components/SearchBox';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allWordpressPost.edges;
    const {
      location: { pathname }
    } = this.props;
    return (
      <Layout currentPath={pathname}>
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <SEO />
        <SearchBox />
        <PostListing postEdges={postEdges} />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(sort: { fields: date, order: ASC }) {
      edges {
        node {
          id
          slug
          title
          excerpt
          date
          author {
            name
          }
          categories {
            name
          }
          tags {
            name
          }
          featured_media {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`;
