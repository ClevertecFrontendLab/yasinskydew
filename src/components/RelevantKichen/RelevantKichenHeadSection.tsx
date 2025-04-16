import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { MenuCategory } from '~/store/menu-slice';

interface RelevantKichenHeadSectionProps {
    menuCategory: MenuCategory;
}

export const RelevantKichenHeadSection = (props: RelevantKichenHeadSectionProps) => {
    const { menuCategory } = props;
    return (
        <Grid
            as='section'
            gridTemplateColumns={{
                base: '1fr',
                md: '1fr 1fr',
                lg: '1fr 2fr',
                '2xl': '1fr 1fr',
            }}
            gap={4}
        >
            <GridItem>
                <Heading
                    fontSize={{ base: '24px', md: '36px', lg: '48px' }}
                    fontWeight='500'
                    fontFamily='var(--font-family)'
                    textAlign='left'
                >
                    {menuCategory.name}
                </Heading>
            </GridItem>
            <GridItem>
                <Text
                    fontSize='16px'
                    fontWeight='500'
                    fontFamily='var(--font-family)'
                    align='left'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    {menuCategory.description}
                </Text>
            </GridItem>
        </Grid>
    );
};
