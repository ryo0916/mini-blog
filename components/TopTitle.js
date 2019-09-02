import React from 'react';
import { Heading, Flex } from 'rebass';

export default (props) => (
  <Flex
    flexDirection="column"
    width={1}
    mb={props.children ? 4 : 3}
    mt={[5, 5]}
    alignItems="center"
    {...{ ...props, title: undefined }}
  >
    <Heading fontSize={[5, 6, 6]} color='rgb(69, 66, 65)' {...props} />
  </Flex>
)