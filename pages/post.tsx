import React from 'react';
import Layout from '../src/Layout';
import PostContent from '../src/PostContent';
import fetch from 'isomorphic-unfetch';

class Post extends React.Component {
  static async getInitialProps(req) {
    const {id} = req.query;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {data};
  }

  render() {
    return (
      <Layout>
        <PostContent data={this.props.data} />
      </Layout>
    );
  }
}
export default Post;
