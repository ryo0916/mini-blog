import React from 'react';

const Index = () => (
  <div>
    {articles.slice(0, 3).map((post, i) => (
      <p>{post.title}</p>
    ))}
  </div>
);

export default Index;