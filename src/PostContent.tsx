import React from 'react';

interface Props {
  data: {
    title: string;
    body: string;
  };
}

const PostContent = (props: Props) => (
  <>
    <h1>{props.data.title}</h1>
    <p>{props.data.body}</p>
  </>
);

export default PostContent;
