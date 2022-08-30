import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import Header from '../Header'

export default function Hero() {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  const [isLargerThan1080] = useMediaQuery('(min-width: 1080px)')
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')

  return (
    <Box
      width="100%"
      bgGradient={
        isLargerThan1080
          ? 'linear(to-r, #0096BE, #641EB4)'
          : 'linear( #0096BE, #641EB4)'
      }
      padding={isLargerThan1080 ? '3.125rem 8.313rem' : '3.125rem 1rem'}
    >
      <Header />
      <Flex
        flexDirection={isLargerThan720 ? 'row' : 'column'}
        justifyContent={isLargerThan1080 ? 'space-between' : 'center'}
        height="100%"
        flexWrap={isLargerThan1080 ? 'nowrap' : 'wrap'}
        marginTop={isLargerThan720 ? '' : '-30px'}
      >
        <Flex
          flexDirection="column"
          width={isLargerThan1400 ? '492px' : isLargerThan720 ? '362px' : ''}
          justifyContent="center"
          alignItems={isLargerThan1080 ? 'flex-start' : 'center'}
        >
          <Text
            fontSize={isLargerThan1400 ? '62px' : '3xl'}
            fontWeight="black"
            letterSpacing={isLargerThan720 ? '1.13px' : '.8px'}
            color="white"
            lineHeight={isLargerThan1400 ? '60px' : '54px'}
            textAlign={isLargerThan1080 ? 'start' : 'center'}
          >
            Seu micromarket descomplicado
          </Text>
          <Text
            textAlign={isLargerThan1080 ? 'start' : 'center'}
            marginTop="10px"
            fontSize={isLargerThan1400 ? '32px' : 'xl'}
            letterSpacing=".63px"
            lineHeight={isLargerThan1400 ? '40px' : '30px'}
            color="purple.800"
          >
            Comece seu micromarket autônomo com a praticidade e eficiência do
            sistema PayLabs.
          </Text>
          <Button
            marginTop="20px"
            width="290px"
            padding="2rem 0"
            bg="purple.800"
            color="white"
            letterSpacing=".55px"
            fontSize="lg"
            borderRadius="10px"
            _hover={{ filter: 'brightness(.9)' }}
          >
            QUERO CONHECER
          </Button>
        </Flex>
        <Flex
          width={isLargerThan720 ? '' : '100%'}
          justifyContent="center"
          alignItems="center"
          marginRight={isLargerThan720 ? '3.5rem' : ''}
          marginTop={isLargerThan720 ? '' : '50px'}
          zIndex={9}
        >
          <Image
            src="/img-banner.png"
            alt="hero pay labs"
            width={isLargerThan1400 ? '800px' : '600px'}
            height={isLargerThan1400 ? '700px' : '500px'}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
