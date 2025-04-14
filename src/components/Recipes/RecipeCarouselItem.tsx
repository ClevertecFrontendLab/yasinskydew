import { Card, Image, useBreakpointValue, VStack } from '@chakra-ui/react';

import { Recipe } from '~/store/recipe-slice';

import { RecipeDescription } from './RecipeDescription';
import { RecipeFooter } from './RecipeFooter';
import { RecipeTitle } from './RecipeTitle';
import { MenuModeEnum } from './RecipeTypes';
import { RecipeDisplayModeEnum } from './RecipeTypes';

interface RecipeItemProps {
    displayMode?: RecipeDisplayModeEnum;
    noImage?: boolean;
    noControl?: boolean;
    menuMode?: MenuModeEnum;
    recipe: Recipe;
}

export const RecipeCarouselItem = (props: RecipeItemProps) => {
    const { image, name, description, menuCategory, likes, favorites } = props.recipe;
    const isMobile = useBreakpointValue({ base: true, xl: false });

    return (
        <Card
            variant='outline'
            direction='column'
            width={{ base: '158px', xl: '279px', '2xl': '324px' }}
            minHeight={{ base: '220px', xl: '414px' }}
        >
            <Image borderTopRadius='inherit' src={image || ''} alt={name} objectFit='fill' />
            <VStack align='stretch' p='16px 24px'>
                <RecipeTitle>{name}</RecipeTitle>
                {!isMobile && <RecipeDescription description={description} />}
                <RecipeFooter menuCategory={menuCategory} likes={likes} favorites={favorites} />
            </VStack>
        </Card>
    );
};
