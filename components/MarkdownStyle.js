import styled from 'styled-components'
import { Heading, Box, Text, Image } from "rebass";
import Link from 'next/link'

const BaseHeading = (props) => (
  <Heading
    lineHeight={1.25}
    fontFamily="system"
    alignSelf="flex-start"
    {...props}
  />
);

const Paragraph = styled(Box)`
  max-width: 35em;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const H2 = (props) => (
  <BaseHeading fontSize={[4, 5]} as="h2" mb={4} mt={5} {...props} />
);
const H3 = (props) => (
  <BaseHeading fontSize={[3, 4]} as="h3" mb={3} mt={4} {...props} />
);
const H4 = (props) => (
  <BaseHeading fontSize={[1, 2]} as="h4" mb={3} mt={3} {...props} />
);

const P = (props) => (
  <Paragraph centered={true} my={[2, 3]}>
    <Text as="p" color="rgb(69, 66, 65)" lineHeight={1.25} {...props} />
  </Paragraph>
)

const A = (props) => (
  <Link href={props.href}>{props.children}</Link>
)

const List = (props) => (
  <Paragraph>
    <Text as="li" ml={3} lineHeight={1.5} {...props}/>
  </Paragraph>
)

const UnOrderedList = (props) => (
  <Box as="ul" ml={2} {...props}
    sx={{
      listStyle: "initial"
    }}
  />
)

const OrderedList = (props) => (
  <Box as="ol" ml={2} {...props}
    sx={{
      listStyle: "decimal"
    }}
  />
)

const Img = (props) => (
  <Image {...props}
    sx={{
      maxWidth: ["75%", "100%"],
      width: 'auto',
      maxHeight: '100%'
    }}
  />
)

export default {
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: A,
  li: List,
  ul: UnOrderedList,
  ol: OrderedList,
  img: Img
};