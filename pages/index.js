import Head from 'next/head'
import { Box, Link, Nav } from 'rebass'
import articles from '../data/listArticles'

const blogTitle = 'ウバ活する? | Ubereats配達員ブログ'
const blogTitleHead = 'ウバ活する?'

const Index = () => (
  <div>
    <Head>
      <title>{blogTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h2>{blogTitleHead}</h2>
    <p>blog post & date</p>
    {articles.slice(0, 2).map((post, i) => (
      <>
        <h3 key={i}>{post.title}</h3>
        <p>{post.publishedAt}</p>
        <p>{post.summary}</p>
        <Box
          display='inline-block'
          width={128}
          height={128}
          p={3}
          color='#db7093'
          bg='papayawhip'>
          Hello
        </Box>
        <Link variant='nav' href='https://rebassjs.org'>Link</Link>
      </>
    ))}
    <p>© 2019 Ryo's Kitchen</p>
  </div>
);

export default Index;