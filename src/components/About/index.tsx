import { Flex, useMediaQuery } from '@chakra-ui/react'
import AdminPanel from '../AdminPainel'
import AdvantageCard from '../AdvantageCard'
import Applications from '../Applications'
import Subhero from '../Subhero'

const ADVANTAGES_DATA = [
  {
    icon: '/ico-estoque.svg',
    alt: 'stock controll icon',
    title: 'Controle de estoque',
    description:
      'Gerencie o estoque remotamente incluindo e excluindo itens necessários.',
  },
  {
    icon: '/ico-vendas.svg',
    alt: 'sales monitoring icon',
    title: 'Acompanhamento de vendas',
    description:
      'Acompanhe em real time o desempenho das vendas do seu micromarket autônomo.',
  },
  {
    icon: '/ico-conectividade.svg',
    alt: 'connected icon',
    title: 'Conectividade das maquinas',
    description:
      'Confira a conectividade das maquinas do seu PDV com a telemetria PayLabs.',
  },
  {
    icon: '/ico-24h.svg',
    alt: 'sales all time icon',
    title: 'Venda 24h por dia 7 dias por semana',
    description:
      'Venda em qualquer oportunidade sem a necessidade de presença de vendedores.',
  },
  {
    icon: '/ico-usabilidade.svg',
    alt: 'easy usage icon',
    title: 'Usabilidade descomplicada',
    description:
      'Sistema e aplicativos pensados e desenvolvidos para facilitar a experiência do usuário.',
  },
  {
    icon: '/ico-facilidade.svg',
    alt: 'easy installation icon',
    title: 'Facilidade de instalação',
    description:
      'Solução simplificada e fácil de instalação da maquina para o seu PDV autônomo.',
  },
]

export default function About() {
  const [isLargerThan1080] = useMediaQuery('(min-width: 1080px)')
  const [isLargerThan1420] = useMediaQuery('(min-width: 1420px)')

  return (
    <>
      <Flex
        width={isLargerThan1420 ? '120%' : isLargerThan1080 ? '110%' : '140%'}
        height={isLargerThan1420 ? '25vh' : isLargerThan1080 ? '25vh' : '13vh'}
        bgColor="grey.50"
        marginTop={
          isLargerThan1420 ? '-25vh' : isLargerThan1080 ? '-8vh' : '-13vh'
        }
        borderRadius="100% 100% 0 0"
        marginLeft={
          isLargerThan1420 ? '-10%' : isLargerThan1080 ? '-5%' : '-20%'
        }
      ></Flex>
      <Flex
        padding={isLargerThan1080 ? '0 8.313rem' : '0 1rem'}
        flexDirection="column"
      >
        <Subhero />
        <Flex flexWrap="wrap" justifyContent="center">
          {ADVANTAGES_DATA.map((item, index) => {
            return <AdvantageCard key={index} item={item} />
          })}
        </Flex>
        <Applications />
        <AdminPanel />
      </Flex>
    </>
  )
}
