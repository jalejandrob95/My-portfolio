import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import Section from '../componets/section'
import Paragraph from '../componets/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
        p={3}
        align="center"
      >
        "Hello, I`m a full-stack developer and live in Ecuador"
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alejandro Bermudez
          </Heading>
          <p>Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Professionally I have skills to develop, analyze and provide solutions
          to requirements and solve problems of real life whit coding. I have
          knowledge in Javascript and Typescript giving full stack solutions to
          the requirements depending on the needs, if you see more of my work
          see {''}
          <NextLink href="https://github.com/jalejandrob95">
            <Link>github</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
        <br></br>
        <Heading as="h3" variant="section-title">
          Back-End
        </Heading>
        <Paragraph>
          I’m developing REST APIs with high demand of users and applying good
          practices.I like to program in OOP depending on the needs in addition
          to using databases relational and non-relational using ORM and ODM
          optimizing search performance. In addition to developing APIs, I have
          also carried out implementations with webSockets, microservices and
          email and sms automation. Using frameworks like NextJs, Express.
        </Paragraph>
        <br></br>
        <Heading as="h3" variant="section-title">
          Front-End
        </Heading>
        <Paragraph>
          I`m have knowledgeReact and React Native,the design model that I have
          used since learning React is atomic design, and use NextJs in some
          cases.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
