import Head from 'next/head'
import { Box, Link, Nav } from 'rebass'
import TopTitle from '../components/Toptitle'
import TopLead from '../components/TopLead'
import TopPageArticles from '../components/TopPageArticles' 

const blogTitleTop = 'ウバ活する | Ubereats配達員ブログ'
const blogTitle = 'ウバ活する'
const blogTitleLead = 'Ubereatsの配達で気づいた事をお届けします。'

const Index = () => (
  <div>
    <Head>
      <title>{blogTitleTop}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <TopTitle>{blogTitle}</TopTitle>
    <TopLead>{blogTitleLead}</TopLead>
    <TopPageArticles />
    <p>more</p>
    <Link variant='nav' href='https://rebassjs.org'>Link</Link>
    <p>フッターで home blog about</p>
    <p>© 2019 {blogTitle}</p>
  </div>
);

export default Index;