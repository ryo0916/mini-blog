import React from 'react'
import { Flex, Text } from 'rebass';
import Link from 'next/link'

const FooterLinkItem = ({href, title, px}) => (

  <Link href={href}>
    <Text px={px}
      sx={{
        color: 'rgb(69, 66, 65)',
        fontWeight: 'bold',
        ':hover': {
          cursor: 'pointer',
          fontWeight: 'bold',
          color: 'black'
        }
      }}
    >
      {title}
    </Text>
  </Link>

)


export default (props) => (
  <Flex 
    as="footer" mt={2} py={5}
    sx={{
      marginTop: 'auto',
    }}
  >
    <Flex flexDirection={"column"} alignItems="center" width={1}>
      <Flex flexDirection={"row"} mb={5}>
        <FooterLinkItem href="/" title="Home" px={3} />
        <FooterLinkItem href="/articles" title="Articles" px={3} />
        <FooterLinkItem href="/about" title="About" px={3} />
      </Flex>
      <Text color="rgb(69, 66, 65)">{props.copyright}</Text>
    </Flex>
  </Flex>

)