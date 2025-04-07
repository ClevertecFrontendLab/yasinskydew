import './App.css';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import Header from '~/components/Header/Header';
import MainContent from '~/components/Layout/MainContent';
import Sidebar from '~/components/Layout/Sidebar';
import RightPanel from '~/components/RightPanel/RightPanel';

function App() {
    return (
        <Box minH='100vh'>
            <Header />
            <Box height='calc(100vh - 80px)' overflow='hidden'>
                <Grid
                    templateColumns={{ base: '1fr', md: '250px 1fr' }}
                    height='100%'
                    pt='80px'
                    position='relative'
                    zIndex={1}
                >
                    <GridItem height='100%' overflow='hidden'>
                        <Sidebar />
                    </GridItem>
                    <GridItem height='100%' overflow='auto' pr={{ lg: '280px' }}>
                        <MainContent />
                    </GridItem>
                </Grid>
                <RightPanel />
            </Box>
        </Box>
    );
}

export default App;
