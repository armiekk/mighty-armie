import React from 'react';
import { Link } from 'gatsby';

import './index.css';

import PostItem from '../PostItem';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        id: postEdge.node.id,
        path: postEdge.node.slug,
        title: postEdge.node.title,
        date: postEdge.node.date,
        excerpt: postEdge.node.excerpt,
        author: postEdge.node.author.name,
        categories: postEdge.node.categories
          ? postEdge.node.categories.map(category => category.name)
          : [],
        tags: postEdge.node.tags ? postEdge.node.tags.map(tag => tag.name) : [],
        thumbnail: postEdge.node.featured_media.localFile.publicURL
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <React.Fragment>
        {/* Your post list here. */
        postList.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </React.Fragment>
    );
  }
}

export default PostListing;
