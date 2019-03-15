import React from 'react';
import Layout from '../src/Layout';
import PostsContent from '../src/PostsContent';
import fetch from 'isomorphic-unfetch';

class Posts extends React.Component {
  static async getInitialProps(req) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await res.json();
    return {data};
  }

  render() {
    return (
      <Layout>
        <PostsContent data={this.props.data} />
      </Layout>
    );
  }
}
export default Posts;
