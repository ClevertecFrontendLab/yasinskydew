import { Card, Image, Stack, useBreakpointValue } from '@chakra-ui/react';

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

    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Card variant='outline' direction='row'>
            <Image
                src={image || ''}
                alt={name}
                objectFit='cover'
                borderLeftRadius='inherit'
                height={{ base: 128, lg: 244 }}
            />
            <Stack p={{ base: '4px 8px', lg: '20px 24px' }}>
                <RecipeFooter
                    menuCategory={menuCategory}
                    likes={likes}
                    favorites={favorites}
                    bgColor='#ffffd3;'
                />
                <RecipeTitle>{name}</RecipeTitle>
                {!isMobile && <RecipeDescription description={description} />}
                <RecipeControl />
            </Stack>
        </Card>
    );
};
