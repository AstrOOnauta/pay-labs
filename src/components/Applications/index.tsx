import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'

const APPLICATIONS_DATA = [
  {
    title: 'Aplicativo consumidor',
    description:
      'Seus consumidores poderão consultar os produtos disponíveis a distância, desbloquear compras de itens com limite de idade e ter acesso a informações de como comprar.',
  },
  {
    title: 'Aplicativo lojista',
    description:
      'Seus lojistas poderão de forma remota gerenciar, conferir as vendas realizadas, ver a telemetria dos PDVs e abastecer de forma simplificada e eficaz a loja.',
  },
]

export default function Applications() {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  const [isLargerThan1080] = useMediaQuery('(min-width: 1080px)')
  const [isLargerThan1420] = useMediaQuery('(min-width: 1420px)')

  return (
    <Flex
      width="100%"
      bgColor="purple.500"
      borderRadius="10px"
      my="100px"
      flexWrap={isLargerThan1080 ? 'nowrap' : 'wrap'}
      padding={
        isLargerThan1420
          ? '50px 100px 20px 100px'
          : isLargerThan1080
          ? '50px 50px 20px 50px'
          : '50px 28px 20px 28px'
      }
      justifyContent={isLargerThan1080 ? 'space-between' : 'center'}
    >
      <Flex
        width={isLargerThan720 ? '' : '100%'}
        justifyContent="center"
        alignItems="center"
        marginRight={isLargerThan720 ? '3.5rem' : ''}
        zIndex={9}
        marginTop={isLargerThan1080 ? '-120px' : '-80px'}
      >
        <Image
          src="/img-app.png"
          alt="hero pay labs"
          width={isLargerThan1420 ? '600px' : '470px'}
          height={isLargerThan1420 ? '570px' : '440px'}
        />
      </Flex>
      <Flex flexDirection="column" width={isLargerThan1080 ? '44%' : '100%'}>
        <Text
          fontSize="3xl"
          fontWeight="black"
          color="purple.100"
          marginTop={isLargerThan1080 ? '' : '40px'}
        >
          Aplicativos
        </Text>
        {APPLICATIONS_DATA.map((item, index) => {
          return (
            <Flex key={index} flexDirection="column">
              <Text
                marginTop="20px"
                color="white"
                fontSize="xl"
                fontWeight="black"
              >
                {item.title}
              </Text>
              <Text color="purple.100" fontSize="md">
                {item.description}
              </Text>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}
