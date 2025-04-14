import { Card, Stack } from '@chakra-ui/react';

import { Recipe } from '../../store/recipe-slice';
import { RecipeDescription } from '../Recipes/RecipeDescription';
import { RecipeFooter } from '../Recipes/RecipeFooter';
import { RecipeTitle } from '../Recipes/RecipeTitle';

interface RelevantRecipeCardProps {
    recipe: Recipe;
}

export const RelevantRecipeCard = (props: RelevantRecipeCardProps) => {
    const { recipe } = props;
    const { menuCategory, likes, favorites } = recipe;

    return (
        <Card
            variant='outline'
            direction='column'
            justifyContent='space-between'
            gap={2}
            p={{ base: '4px 8px', sm: '16px', lg: '20px 24px' }}
            minWidth='232px'
        >
            <Stack justifyContent='space-between'>
                <RecipeTitle>{recipe.name}</RecipeTitle>
                <RecipeDescription description={recipe.description} />
            </Stack>
            <RecipeFooter
                menuCategory={menuCategory}
                likes={likes}
                favorites={favorites}
                bgColor='#ffffd3;'
                isRelevantKichen={true}
            />
        </Card>
    );
};
