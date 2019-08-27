import Head from 'next/head'
import TopTitle from '../components/Toptitle'
import TopLead from '../components/TopLead'
import TopPageArticles from '../components/TopPageArticles'
import ToArticles from '../components/ToArticles'
import Footer from '../components/Footer'

const blogTitleTop = 'ウバ活する | Ubereats配達員ブログ'
const blogTitle = 'ウバ活する'
const blogTitleLead = 'Ubereatsの配達で気づいた事をお届けします。'
const footerLink = ['Home', 'Blog', 'About'];
let copyright = '© 2019 ' + blogTitle;

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
    <p>{footerLink}</p>
    <p>{copyright}</p>
  </div>
);

export default Index;