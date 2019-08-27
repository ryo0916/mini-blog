import React from 'react'
import Link from 'next/link'
import { Text, Flex } from 'rebass'

export default () => (
  <Flex flexDirection="column" width={1} alignItems="center" pt={2}>
    <Link href="/articles">
      <Text 
        color="#dc0b0b"
        sx={{
          borderBottom: 'none',
          ':hover': {
            cursor: 'pointer',
            borderBottom: 'solid 1px red',
          }
        }}
      >
        もっと見る
      </Text>
    </Link>
  </Flex>
)