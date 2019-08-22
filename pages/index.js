import Link from 'next/link';
import Test from '../static/articles/test.md'
import { Button } from 'rebass'


const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/about">
      <a>To about page</a>
    </Link>
    <Test />
    <Button bg='red' color='black' mr={2}>Beep</Button>
  </div>
);

export default Index;