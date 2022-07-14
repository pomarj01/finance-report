import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react';
import Portfolio from './PortfolioValue';


function App() {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        minHeight="100vh"
        height="100%"
        flexDirection="column"
      >
        <Container maxW="container.lg" mt={4}>
          <Grid
            gridTemplateRows={'50px 1fr'}
            // gap={10}
            padding={6}
            shadow="md"
            borderWidth="1px"
            borderRadius="xl"
          >
            <GridItem colSpan={2}>
              <Heading
                as="h1"
                justifyContent="center"
                size="lg"
                mb={4}
                mt={[1, 2]}
              >
                Finance Report
              </Heading>
            </GridItem>

            <GridItem colSpan={2}>
              <Portfolio />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
