import { Box, Grid, GridItem } from '@chakra-ui/react';

import Header from '~/components/Header/Header';
import Sidebar from '~/components/Layout/Sidebar';
import RightPanel from '~/components/RightPanel/RightPanel';

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
    <Box minH='100vh'>
        <Header />
        <Box overflow='hidden'>
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
                    {children}
                </GridItem>
            </Grid>
            <RightPanel />
        </Box>
    </Box>
);
