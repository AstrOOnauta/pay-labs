import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex
      width="100%"
      minHeight="100vh"
      backgroundColor="grey.50"
      color="grey.600"
      fontFamily="lato"
      fontWeight="normal"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Pay Labs</Text>
    </Flex>
  )
}

export default Home
