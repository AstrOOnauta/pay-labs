import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface AdvantageCardProps {
  item: { icon: string; alt: string; title: string; description: string }
}

export default function AdvantageCard({ item }: AdvantageCardProps) {
  return (
    <Flex width="350px" marginBottom="30px">
      <Flex width="45%" height="52px" marginTop="5px">
        <Image src={item.icon} alt={item.alt} width="52px" height="52px" />
      </Flex>
      <Flex flexDirection="column" marginRight="2rem">
        <Text
          fontSize="xl"
          fontWeight="black"
          color="blue"
          marginRight="1.4rem"
          lineHeight="30px"
        >
          {item.title}
        </Text>
        <Text fontSize="md" lineHeight="23px" marginTop="10px">
          {item.description}
        </Text>
      </Flex>
    </Flex>
  )
}
