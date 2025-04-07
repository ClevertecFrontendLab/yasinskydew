import './App.css';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import Header from '~/components/Header/Header';
import MainContent from '~/components/Layout/MainContent';
import Sidebar from '~/components/Layout/Sidebar';

function App() {
    return (
        <Box minH='100vh - 80px'>
            <Header />
            <Box>
                <Grid
                    templateColumns={{ base: '1fr', md: '250px 1fr' }}
                    pt='80px'
                    position='relative'
                    zIndex={1}
                >
                    <GridItem>
                        <Sidebar />
                    </GridItem>
                    <GridItem>
                        <MainContent />
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default App;
