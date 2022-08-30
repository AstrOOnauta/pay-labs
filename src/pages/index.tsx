import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <Flex
      width="100%"
      minHeight="100vh"
      backgroundColor="grey.50"
      color="grey.600"
      fontFamily="lato"
      fontWeight="normal"
    >
      <Hero />
    </Flex>
  )
}

export default Home
