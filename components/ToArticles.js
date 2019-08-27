import React from 'react'
import Link from 'next/link'
import { Text, Flex } from 'rebass'

export default () => (
  <Flex flexDirection="column" width={1} alignItems="center" pt={2}>
    <Link href="/articles">
      <Text 
        color="#dc0b0b"
        sx={{
          borderBottom: 'solid 1px rgb(246, 247, 248)',
          ':hover': {
            cursor: 'pointer',
            borderBottom: 'solid 1px #dc0b0b',
          }
        }}
      >
        もっと見る
      </Text>
    </Link>
  </Flex>
)