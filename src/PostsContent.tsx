import React from 'react';
import Link from 'next/link';

const PostsContent = props => {
  return (
    <ul>
      {props.data.map(post => {
        return (
          <li key={post.id}>
            <Link as={`/post/${post.id}`} href={`/post?id=${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsContent;
