import {
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  useMediaQuery,
} from '@chakra-ui/react'

export default function Contact() {
  const [isLargerThan1080] = useMediaQuery('(min-width: 1080px)')

  return (
    <Flex
      width="100%"
      bgColor="blue"
      flexDirection="column"
      alignItems="center"
      padding={isLargerThan1080 ? '85px 325px' : '85px 15px'}
    >
      <Text color="white" fontSize="3xl" fontWeight="black" marginBottom="30px">
        Quero conhecer
      </Text>
      <Input
        bgColor="white"
        placeholder="Nome"
        padding="28px 30px"
        marginBottom="10px"
      />
      <Input
        bgColor="white"
        placeholder="E-mail"
        padding="28px 30px"
        marginBottom="10px"
      />
      <Input
        bgColor="white"
        placeholder="Celular"
        padding="28px 30px"
        marginBottom="10px"
      />
      <Textarea
        bgColor="white"
        placeholder="Mensagem"
        padding="28px 30px"
        marginBottom="10px"
        rows={3}
      />
      <Button
        marginTop="20px"
        width="165px"
        padding="2rem 0"
        bg="purple.800"
        color="white"
        letterSpacing=".55px"
        fontSize="lg"
        borderRadius="10px"
        _hover={{ filter: 'brightness(.9)' }}
      >
        ENVIAR
      </Button>
    </Flex>
  )
}
