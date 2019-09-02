import Head from 'next/head'
import TopTitle from '../components/Toptitle'
import TopLead from '../components/TopLead'
import { Card, Heading, Text } from 'rebass'

const blogTitleTop = 'ウバ活する | '
const blogTitle = 'ウバ活する'
const blogTitleLead = 'Ubereatsの配達で気づいた事をお届けします。'

function ShowArticle({ path, meta, children }) {
  return (
    <div>
      <Head>
        <title>{blogTitleTop} {meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopTitle>{blogTitle}</TopTitle>
      <TopLead>{blogTitleLead}</TopLead>
      <Card width={[456, 640]} mx="auto"
      >
        <Heading fontSize={[4, 5]} my={2} lineHeight={1.25}>
          {meta.title}
        </Heading>
        <Text mt={3} mb={4}>{meta.publishedAt}</Text>
        {children}
      </Card>
    </div>
  );
}

export default ShowArticle;
