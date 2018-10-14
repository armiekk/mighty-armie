import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/MTALayout';
import UserInfo from '../components/UserInfo/UserInfo';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './post.css';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.wordpressPost;
    console.log(postNode);
    // if (!postNode.id) {
    //   postNode.id = slug;
    // }
    // if (!postNode.category.id) {
    //   postNode.category.id = config.postDefaultCategoryID;
    // }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${postNode.title} | ${config.siteTitle}`}</title>
          </Helmet>
          {/* <SEO postPath={slug} postNode={postNode} postSEO /> */}
          <div>
            <h1>{postNode.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.content }} />
            <div className="post-meta">
              {/* <PostTags tags={post.tags} /> */}
              {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
            </div>
            <UserInfo config={config} />
            {/* <Disqus postNode={postNode} /> */}
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      id
      slug
      title
      content
      excerpt
      date
      modified
      categories {
        id
        name
      }
      tags {
        id
        name
      }
    }
  }
`;
