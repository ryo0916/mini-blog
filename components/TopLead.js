import React from 'react'
import { Flex, Heading } from 'rebass'

export default (props) => (
  <Flex
    flexDirection="column"
    width={1}
    mb={props.children ? 4 : 3}
    mt={[1, 1]}
    alignItems="center"
    {...{ ...props, title: undefined }}
  >
    <Heading fontSize={[2, 4]} color='rgb(69, 66, 65)' {...props} />
  </Flex>
)