import { Flex, Text, useMediaQuery } from '@chakra-ui/react'

export default function Subhero() {
  const [isLargerThan1420] = useMediaQuery('(min-width: 1420px)')

  return (
    <Flex
      width="100%"
      flexDirection="column"
      marginTop={isLargerThan1420 ? '-6rem' : ''}
      marginBottom="100px"
      shadow="0 0 20px 1px rgba(0, 0, 0, .3)"
      borderRadius="10px"
      padding={isLargerThan1420 ? '50px 100px' : '50px 3rem'}
    >
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="black"
        color="purple.500"
      >
        A tecnologia ideal para seu micromarket residencial ou comercial.
      </Text>
      <Text
        textAlign="center"
        fontSize="xl"
        px={isLargerThan1420 ? '300px' : 0}
        lineHeight="30px"
      >
        Tenha toda a solução necessária para seu micromarket e ponto de venda
        autônomo com o sistema e aplicativos PayLabs.
      </Text>
    </Flex>
  )
}
