import {
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from '@chakra-ui/react'
import Image from 'next/image'

const ADMIN_PANEL_DATA = [
  'Acompanhe suas vendas',
  'Confira a telemetria das maquinas',
  'Veja as transações realizadas',
  'Gerencie seu estoque',
  'Envie notificações aos consumidores',
]

export default function AdminPanel() {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  const [isLargerThan1080] = useMediaQuery('(min-width: 1080px)')
  const [isLargerThan1420] = useMediaQuery('(min-width: 1420px)')
  return (
    <Flex
      width="100%"
      borderRadius="10px"
      mb="100px"
      mt={isLargerThan720 ? '' : '-30px'}
      flexWrap={isLargerThan1080 ? 'nowrap' : 'wrap'}
      justifyContent={isLargerThan1080 ? 'space-between' : 'center'}
      alignItems="center"
    >
      {isLargerThan1080 ? (
        <Flex flexDirection="column">
          <Text fontSize="3xl" fontWeight="black" color="purple.500">
            Painel administrativo
          </Text>
          <UnorderedList marginLeft="24px" marginTop="24px">
            {ADMIN_PANEL_DATA.map((item, index) => {
              return (
                <ListItem key={index} fontSize="md">
                  {item}
                </ListItem>
              )
            })}
          </UnorderedList>
        </Flex>
      ) : (
        ''
      )}
      <Flex
        width={isLargerThan720 ? '' : '100%'}
        justifyContent="center"
        alignItems="center"
        zIndex={9}
      >
        <Image
          src="/img-painel.png"
          alt="admin panel pay labs"
          width={
            isLargerThan1420
              ? '1200px'
              : isLargerThan1080
              ? '900px'
              : isLargerThan720
              ? '600px'
              : '350px'
          }
          height={
            isLargerThan1420
              ? '800px'
              : isLargerThan1080
              ? '650px'
              : isLargerThan720
              ? '400px'
              : '250px'
          }
        />
      </Flex>
      {isLargerThan1080 ? (
        ''
      ) : (
        <Flex flexDirection="column">
          <Text
            fontSize="3xl"
            fontWeight="black"
            color="purple.500"
            marginTop={isLargerThan1080 ? '' : '40px'}
            lineHeight="48px"
          >
            Painel administrativo
          </Text>
          <UnorderedList marginLeft="24px" marginTop="24px">
            {ADMIN_PANEL_DATA.map((item, index) => {
              return (
                <ListItem key={index} fontSize="md">
                  {item}
                </ListItem>
              )
            })}
          </UnorderedList>
        </Flex>
      )}
    </Flex>
  )
}
