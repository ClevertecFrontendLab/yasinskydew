import { Box, Grid, GridItem } from '@chakra-ui/react';

import { MenuCategory } from '~/store/menu-slice';
import { Recipe } from '~/store/recipe-slice';

import { RelevantKichenCard } from './RelevantKichenCard';
import { RelevantRecipeCard } from './RelevantRecipeCard';

interface RelevantKichenCardSectionProps {
    recipes: Recipe[];
    menuCategory: MenuCategory;
}

export const RelevantKichenCardSection = (props: RelevantKichenCardSectionProps) => {
    const { recipes, menuCategory } = props;

    return (
        <Grid
            as='section'
            gridTemplateColumns={{
                base: '1fr',
                md: 'repeat(3, 1fr)',
                '2xl': '1fr 1fr 2fr',
            }}
            flexDirection='column'
            gap={2}
        >
            <GridItem>
                <RelevantRecipeCard key={recipes[0].id} menuCategory={menuCategory}>
                    {recipes[0]}
                </RelevantRecipeCard>
            </GridItem>
            <GridItem>
                <RelevantRecipeCard key={recipes[1].id} menuCategory={menuCategory}>
                    {recipes[1]}
                </RelevantRecipeCard>
            </GridItem>
            <GridItem>
                <Box display='flex' gap={2} flexDirection='column'>
                    {recipes.slice(2, 5).map((recipe) => (
                        <RelevantKichenCard key={recipe.id} menuCategory={menuCategory}>
                            {recipe}
                        </RelevantKichenCard>
                    ))}
                </Box>
            </GridItem>
        </Grid>
    );
};
