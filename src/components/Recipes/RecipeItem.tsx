import { Card, Image, Stack } from '@chakra-ui/react';

import { Recipe } from '~/store/recipe-slice';

import { RecipeControl } from './RecipeControl';
import { RecipeDescription } from './RecipeDescription';
import { RecipeFooter } from './RecipeFooter';
import { RecipeTitle } from './RecipeTitle';
import { MenuModeEnum } from './RecipeTypes';
import { RecipeDisplayModeEnum } from './RecipeTypes';

interface RecipeItemProps extends Recipe {
    displayMode?: RecipeDisplayModeEnum;
    noImage?: boolean;
    noControl?: boolean;
    menuMode?: MenuModeEnum;
}

export const RecipeItem = (props: RecipeItemProps) => {
    const { image, name, description, menuCategory, likes, favorites } = props;

    return (
        <Card variant='outline' direction={{ base: 'column', sm: 'row' }}>
            <Image src={image || ''} alt={name} objectFit='cover' />
            <Stack p='20px 24px'>
                <RecipeFooter menuCategory={menuCategory} likes={likes} favorites={favorites} />
                <RecipeTitle>{name}</RecipeTitle>
                <RecipeDescription description={description} />
                <RecipeControl />
            </Stack>
        </Card>
    );
};
