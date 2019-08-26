import React from 'react'
import articles from '../data/listArticles'
import { Card, Heading, Text } from 'rebass'

export default (props) => (
  <>
    <Card width={[320, 480]} mx="auto" bg="white" p={4} mb={5}>
      <Heading fontSize={[3,4]} lineHeight={1.25} pb={3} color='rgb(69, 66, 65)'>Ubereatsの配達員に登録してみた</Heading>
      <Text fontSize={[2,3]} lineHeight={1.25} pb={4} color='rgb(69, 66, 65)'>
      どうせ時間もあるんだし、お金が無いなら稼ぎの当てにUbereatsの配達員をやってみようと思い始めた。
      </Text>
      <Text fontSize={[1,2]} color='rgb(69, 66, 65)'>2019-08-26</Text>
    </Card>

    {articles.slice(0, 2).map((post, i) => (
      <Card width={[320, 480]} mx="auto" bg="white" p={4} mb={5}>
        <Heading fontSize={[3,4]} lineHeight={1.25} pb={3} color='rgb(69, 66, 65)'>{post.title}</Heading>
        <Text fontSize={[2,3]} lineHeight={1.25} pb={4} color='rgb(69, 66, 65)'>
          {post.summary}
        </Text>
        <Text fontSize={[1,2]} color='rgb(69, 66, 65)'>{post.publishedAt}</Text>
      </Card>
    ))}

  </>
)