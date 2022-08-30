import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'

const SOCIAL_MEDIAS_DATA = [
  {
    icon: '/ico-facebook.png',
    alt: 'facebook icon',
  },
  {
    icon: '/ico-instagram.png',
    alt: 'instagram icon',
  },
  {
    icon: '/ico-linkedin.png',
    alt: 'linkedin icon',
  },
]

export default function Footer() {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  const [isLargerThan1080] = useMediaQuery('(min-width: 1080px)')

  return (
    <Flex
      width="100%"
      flexDirection="column"
      alignItems="center"
      bgColor="purple.900"
    >
      <Flex
        width="100%"
        bgColor="purple.800"
        padding={isLargerThan1080 ? '35px 130px' : '30px'}
        justifyContent={isLargerThan720 ? 'space-between' : 'center'}
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
            width="120px"
            height="30px"
          />
        </Flex>
        <Flex alignItems="center" marginTop={isLargerThan720 ? '' : '20px'}>
          <Text
            fontSize="sm"
            color="white"
            marginRight="10px"
            whiteSpace="nowrap"
          >
            Siga-nos
          </Text>
          {SOCIAL_MEDIAS_DATA.map((item, index) => {
            return (
              <Flex
                key={index}
                width={isLargerThan720 ? '' : '100%'}
                justifyContent="center"
                alignItems="center"
                marginLeft="10px"
                _hover={{ filter: 'brightness(.8)', cursor: 'pointer' }}
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  layout="fixed"
                  width="30px"
                  height="30px"
                />
              </Flex>
            )
          })}
        </Flex>
      </Flex>
      <Text fontSize="xs" color="white" py="16px">
        Copyright © {new Date().getFullYear()} PayLabs - Todos os direitos
        reservados.
      </Text>
    </Flex>
  )
}
