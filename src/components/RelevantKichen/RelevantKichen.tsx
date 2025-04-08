import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { MenuCategory } from '../../store/menu-slice';
import { Recipe } from '../../store/recipe-slice';
import { RecipeItem } from '../Recipes/RecipeItem';
import { MenuModeEnum, RecipeDisplayModeEnum } from '../Recipes/RecipeTypes';
import { RelevantKichenCard } from './RelevantKichenCard';

interface RelevantKichenProps {
    menuCategory: MenuCategory;
    recipes: Recipe[];
}

export const RelevantKichen = (props: RelevantKichenProps) => {
    const { menuCategory, recipes } = props;

    return (
        <Box width='100%' borderTop='1px solid #E0E0E0' pt='24px'>
            <Box display='grid' gridTemplateColumns='1fr 1fr' gap={4}>
                <Heading
                    fontSize='48px'
                    fontWeight='500'
                    fontFamily='var(--font-family)'
                    textAlign='left'
                >
                    {menuCategory.name}
                </Heading>
                <Text
                    fontSize='16px'
                    fontWeight='500'
                    fontFamily='var(--font-family)'
                    align='left'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    {menuCategory.description}
                </Text>
            </Box>
            <Box display='grid' gridTemplateColumns='1fr 1fr' gap={4}>
                <Box display='flex' gap={4}>
                    {recipes.slice(0, 2).map((recipe) => (
                        <RecipeItem
                            key={recipe.id}
                            displayMode={RecipeDisplayModeEnum.NORMAL}
                            noImage={true}
                            noControl={true}
                            menuMode={MenuModeEnum.SECONDARY}
                            {...recipe}
                        />
                    ))}
                </Box>
                <Flex gap={2} flexDirection='column'>
                    {recipes.slice(2, 5).map((recipe) => (
                        <RelevantKichenCard key={recipe.id} {...recipe} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
