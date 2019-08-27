import React from 'react'
import articles from '../data/listArticles'
import { Card, Heading, Text } from 'rebass'
import Link from 'next/link'


export default (props) => (
  <>
    {articles.slice(0, 2).map((post, i) => (
      <Link href={`/articles/${post.address}`}>
        <Card 
          width={[320, 480]} mx="auto" bg="white" p={4} mb={4} key={i}
          sx={{
            boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
            transition: 'box-shadow .8s',
            ':hover': {
              cursor: 'pointer',
              boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
            }
          }}
        >
          <Heading fontSize={[3,4]} lineHeight={1.25} pb={3} color='rgb(69, 66, 65)'>{post.title}</Heading>
          <Text fontSize={[2,3]} lineHeight={1.25} pb={4} color='rgb(69, 66, 65)'>
            {post.summary}
          </Text>
          <Text fontSize={[1,2]} color='rgb(69, 66, 65)'>{post.publishedAt}</Text>
        </Card>
      </Link>
    ))}
  </>
)