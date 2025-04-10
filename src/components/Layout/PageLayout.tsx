import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '../Header/Header';
import RightPanel from '../RightPanel/RightPanel';
import NavPanel from './NavPanel';

export const PageLayout = () => (
    <Box minH='100vh'>
        <Header />
        <Grid
            templateColumns={{ base: '1fr', lg: '250px 1fr 200px' }}
            height='100%'
            gap='24px'
            pt='80px'
        >
            <GridItem height='100%' overflow='hidden' display={{ base: 'none', lg: 'block' }}>
                <NavPanel />
            </GridItem>
            <GridItem height='100%' overflow='auto'>
                <Outlet />
            </GridItem>
            <GridItem height='100%' overflow='hidden' display={{ base: 'none', lg: 'block' }}>
                <RightPanel />
            </GridItem>
        </Grid>
    </Box>
);
