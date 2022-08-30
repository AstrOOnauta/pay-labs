import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
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
      flexDirection="column"
    >
      <Hero />
      <About />
      <Contact />
      <Footer />
    </Flex>
  )
}

export default Home
