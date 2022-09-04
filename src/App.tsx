import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import WithSubnavigation from "./Navigation"
import SimplyGlutenFree from "./SimplyGlutenFree"
import LocateLocal from "./LocateLocal"
import IconLibrary from "./IconLibrary"
import SimplyGlutenFreePage from "./SimplyGlutenFreePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const App = () => (
  <ChakraProvider theme={theme}>
        <WithSubnavigation />
    <SimplyGlutenFree />
    <LocateLocal />
    <IconLibrary />
    {/* <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box> */}
  </ChakraProvider>
)
