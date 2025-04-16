import { Card, Stack } from '@chakra-ui/react';

import { MenuCategory } from '~/store/menu-slice';

import { Recipe } from '../../store/recipe-slice';
import { RecipeDescription } from '../Recipes/RecipeDescription';
import { RecipeFooter } from '../Recipes/RecipeFooter';
import { RecipeTitle } from '../Recipes/RecipeTitle';

interface RelevantRecipeCardProps {
    menuCategory: MenuCategory;
    children: Recipe;
}

export const RelevantRecipeCard = ({ menuCategory, children }: RelevantRecipeCardProps) => {
    const { title, description, likes, bookmarks } = children;

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
                <RecipeTitle>{title}</RecipeTitle>
                <RecipeDescription description={description} />
            </Stack>
            <RecipeFooter
                menuCategory={menuCategory}
                likes={likes}
                favorites={bookmarks}
                bgColor='#ffffd3;'
                isRelevantKichen={true}
            />
        </Card>
    );
};
