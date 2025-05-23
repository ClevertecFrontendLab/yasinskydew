import { Card, Image, Stack, useBreakpointValue } from '@chakra-ui/react';

import { Recipe } from '~/store/recipe-slice';

import { CustomBadge } from '../Badge/Badge';
import { RecipeControl } from './RecipeControl';
import { RecipeDescription } from './RecipeDescription';
import { RecipeFooter } from './RecipeFooter';
import { RecipeTitle } from './RecipeTitle';
import { RecipeDisplayModeEnum } from './RecipeTypes';

interface RecipeItemProps extends Recipe {
    displayMode?: RecipeDisplayModeEnum;
}

export const RecipeItem = (props: RecipeItemProps) => {
    const { image, name, description, menuCategory, likes, favorites } = props;

    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Card variant='outline' direction='row' position='relative'>
            <Image
                src={image || ''}
                alt={name}
                objectFit='cover'
                borderLeftRadius='inherit'
                height={{ base: 128, lg: 244 }}
            />
            <CustomBadge
                bgColor='var(--lime50-color)'
                icon={menuCategory.icon}
                display={isMobile ? 'flex' : 'none'}
                position='absolute'
                top='8px'
                left='8px'
            >
                {menuCategory.name}
            </CustomBadge>
            <Stack
                p={{ base: '4px 8px', lg: '20px 24px' }}
                justifyContent='space-between'
                width='100%'
            >
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
