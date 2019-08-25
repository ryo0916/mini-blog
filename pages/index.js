import Head from 'next/head'
import { Box, Link, Nav } from 'rebass'
import articles from '../data/listArticles'
import TopTitle from '../components/Toptitle'
import TopLead from '../components/TopLead'

const blogTitleTop = 'ウバ活する | Ubereats配達員ブログ'
const blogTitle = 'ウバ活する'
const blogTitleLead = 'Ubereats配達員ブログ'

const Index = () => (
  <div>
    <Head>
      <title>{blogTitleTop}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <TopTitle>{blogTitle}</TopTitle>
    <TopLead>{blogTitleLead}</TopLead>
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
          bg='blue'>
          Hello
        </Box>
        <Link variant='nav' href='https://rebassjs.org'>Link</Link>
      </>
    ))}
    <p>© 2019 {blogTitle}</p>
  </div>
);

export default Index;