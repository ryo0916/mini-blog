import Link from 'next/link';
import Test from '../static/articles/test.md'
import { Button, Card } from 'rebass'
import articles from '../data/listArticles' 

console.log(articles);

const Index = () => (
  <div>
    {articles.slice(0, 3).map((post, i) => (
      <p>{post.title}</p>
    ))}
  </div>
);

export default Index;