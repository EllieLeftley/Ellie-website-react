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
  Route,
  Routes,
  Link
} from "react-router-dom";
import LocateLocalPage from "./LocateLocalPage"
import UxProject from "./UxProject"
import UxProjectPage from "./UxProjectPage"

export const Home = () => (
<>
<UxProject />
    <SimplyGlutenFree />
    <LocateLocal />
    <IconLibrary />
    </>
);


export const App = () => (
  <ChakraProvider theme={theme}>
    <WithSubnavigation />
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="simply-gluten-free" element={<SimplyGlutenFreePage />} />
      <Route path="locate-local" element={<LocateLocalPage />} />
      <Route path="ux-project" element={<UxProjectPage />} />
    </Routes>
      </Router>

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
