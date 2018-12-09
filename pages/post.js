import React from 'react';

export default class Posts extends React.Component {
  static getInitialProps({ query: { posts } }) {
    return { posts };
  }

  render() {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
}
