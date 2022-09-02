import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function SimplyGlutenFreePage() {
  return (
    <>
    <Box bg={'pink.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324494/gluten-free-pancakes-for-different-diets-topped-with-blueberries-and-nuts.jpg')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, pink.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'white'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'white.500'}>
                Personal project | 2020
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Simply Gluten Free
              </Heading>
              <Text fontSize={'xl'} color={'white'}>
              As someone who has a Gluten free restricted diet, I often found myself searching through magazines, blogs and online stores to find places to eat out, to shop and to discover new recipes. This proved to be time consuming and often resulted with little success.
              </Text>
              <Text fontSize={'xl'} color={'white'}>
              Therefore, I decided to investigate whether this was a common issue with those who follow a gluten free diet and if so, whether I could develop a potential solution.
              </Text>
            </Box>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>

    </Box>
    <Box position={'relative'}>
          hello
        </Box>
        </>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];