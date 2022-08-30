import { Flex, Link, Text, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'

export default function Header() {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')

  return (
    <Flex
      justifyContent={isLargerThan720 ? 'space-between' : 'center'}
      alignItems="center"
      flexWrap="wrap"
    >
      <Flex
        width={isLargerThan720 ? '' : '100%'}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/logo-paylabs.svg"
          alt="logo pay labs"
          layout="fixed"
          width="164px"
          height="41px"
        />
      </Flex>
      <Link
        href="https://api.whatsapp.com/send?phone=5511991061052"
        target="_blank"
        rel="noreferrer"
      >
        <Flex
          alignItems="center"
          marginTop={isLargerThan720 ? '' : '10px'}
          _hover={{ filter: 'brightness(.8)' }}
        >
          <Image
            src="/logo-whatsapp.svg"
            alt="logo whatsapp"
            layout="fixed"
            width={isLargerThan720 ? '22.8px' : '16.5px'}
            height={isLargerThan720 ? '22.8px' : '16.5px'}
          />
          <Text
            color="white"
            fontSize={isLargerThan720 ? 'xl' : 'md'}
            fontWeight="black"
            marginLeft={isLargerThan720 ? '10px' : '7.2px'}
            letterSpacing=".57px"
          >
            11 99106.1052
          </Text>
        </Flex>
      </Link>
    </Flex>
  )
}
