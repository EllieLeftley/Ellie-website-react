import { ReactNode } from 'react';
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    ListItem,
    UnorderedList,
    Image,
    Link,
    OrderedList,
} from '@chakra-ui/react';

export default function LocateLocalPage() {
    return (
        <>
            <Box bg={'pink.800'} position={'relative'}>
                <Flex
                    flex={1}
                    zIndex={0}
                    display={{ base: 'none', lg: 'flex' }}
                    backgroundImage="url('https://i.ibb.co/jwGKfF6/Screen-Shot-2021-02-28-at-12-44-48.png')"
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
                                   Locate Local
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
                <Container maxW={'7xl'} p="12">
                    <Text as={'h2'} fontSize='xl' fontWeight={'bold'}>
                        Research
                    </Text>
                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Desktop Research
                    </Text>
                    <Text as='p' marginTop='5' >
                        I began my investigation by carrying out desktop research. Across different mediums; books, magazines, websites and apps, I searched to find whether a solution to my problem currently exists in the market.
                        <br /><br></br>
                        I searched in local grocery stores, online and through app stores including IOS app store and Android app store. Search terms included ‘gluten ree’, 'restaurants', 'recipes', ‘food apps’, ‘recipe apps’ and ‘restaurant finder apps’.
                        <br /><br></br>
                        With each source of information, I read reviews to further understand the aims of readers and users and also to discover where perhaps it did not meet their expectations.
                        <br /><br></br>
                        From my desktop research, I found that different mediums each gave specific information into one or more areas I was searching for; recipes, restaurants and food supplies. However, there was not one medium that acted as a sole host of all this information.
                        <br /><br></br>
                        Apps I reviewed included:

                        <UnorderedList>
                            <ListItem>Gluten free heaven</ListItem>
                            <ListItem>How to be Gluten free and keep your friends</ListItem>
                            <ListItem>Simple Vegan: Recipes and Guides</ListItem>
                            <ListItem>Meals - Healthy meal planner</ListItem>
                        </UnorderedList>
                    </Text>
                    {/* <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient=
                'radial(orange.300 1px, transparent 1px)'
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
   
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Blog article title
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Box>
      </Box> */}
                    <Image src='appscreenshotone.png' />
                    <Image src='appscreenshottwo.png' />

                    <Text as={'h2'} marginTop='5' fontSize='xl'>
                        Interviews
                    </Text>

                    <Text as='p' marginTop='5' >
                    Following on from the desktop research, I wanted to confirm whether the problem was one that was a common experience for others. To do so I carried out qualitative research in the form of interviews, on individuals who follow a Gluten Free diet. My aim was to understand and identify the needs of those who follow a gluten free diet as well as some of their challenges.
                        <br /><br></br>
                        Some of the questions used in the interviews included:
                        <br /><br></br>
                        <OrderedList marginLeft='10'>
                            <ListItem>What are your reasons for following a Gluten Free diet?</ListItem>
                            <ListItem>What do you enjoy most about following a Gluten Free diet?</ListItem>
                            <ListItem>What do you find most difficult about following a Gluten Free diet?</ListItem>
                        </OrderedList>
                        <br />
                        To help make sense of my interview findings, I grouped common problems through the tool of an affinity map. From this exercise, I was able to identify two key problems which had the greatest impact on the majority of those who I interviewed.

                    </Text>
                </Container>
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