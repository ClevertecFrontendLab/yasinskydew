import { Box, useBreakpointValue } from '@chakra-ui/react';

import { Recipe } from '~/store/recipe-slice';

import { RecipeItem } from './RecipeItem';
import { RecipeDisplayModeEnum } from './RecipeTypes';

interface RecipeListProps {
    children: Recipe[];
    currentCategory: string;
    currentSubCategory: string;
}

export const RecipeList = (props: RecipeListProps) => {
    const { children, currentCategory, currentSubCategory } = props;
    const displayMode = useBreakpointValue<RecipeDisplayModeEnum>({
        base: RecipeDisplayModeEnum.COMPACT,
        sm: RecipeDisplayModeEnum.NORMAL,
        lg: RecipeDisplayModeEnum.DETAILED,
    });

    return (
        <Box
            display='grid'
            gridTemplateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: '1fr',
                '2xl': 'repeat(2, 1fr)',
            }}
            gap={6}
        >
            {children.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    {...recipe}
                    displayMode={displayMode || RecipeDisplayModeEnum.NORMAL}
                    currentCategory={currentCategory}
                    currentSubCategory={currentSubCategory}
                />
            ))}
        </Box>
    );
};
