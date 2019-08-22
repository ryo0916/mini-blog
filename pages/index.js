import Link from 'next/link';
import Test from '../static/articles/test.md'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/about">
      <a>To about page</a>
    </Link>
    <Test />
  </div>
);

export default Index;