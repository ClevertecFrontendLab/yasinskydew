import { Card, Image, VStack } from '@chakra-ui/react';

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

    return (
        <Card variant='outline' direction='column' width={{ base: '100%', lg: '322px' }}>
            <Image
                borderTopRadius='inherit'
                src={image || ''}
                alt={name}
                objectFit='cover'
                height={{ base: '200px', md: '230px', lg: '230px' }}
            />
            <VStack align='stretch' p='16px 24px'>
                <RecipeTitle>{name}</RecipeTitle>
                <RecipeDescription description={description} />
                <RecipeFooter menuCategory={menuCategory} likes={likes} favorites={favorites} />
            </VStack>
        </Card>
    );
};
