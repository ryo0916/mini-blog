import Head from 'next/head'
import TopTitle from '../components/Toptitle'
import TopLead from '../components/TopLead'
import TopPageArticles from '../components/TopPageArticles'
import ToArticles from '../components/ToArticles'


const blogTitleTop = 'ウバ活する | Top'
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
    <ToArticles />
  </div>
);

export default Index;