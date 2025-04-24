import { Card, Image, Stack, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { useMainMenu } from '~/store/hooks';
import { MenuCategory } from '~/store/menu-slice';
import { Recipe } from '~/store/recipe-slice';

import { CustomBadge } from '../Badge/Badge';
import { RecipeControl } from './RecipeControl';
import { RecipeDescription } from './RecipeDescription';
import { RecipeFooter } from './RecipeFooter';
import { RecipeTitle } from './RecipeTitle';
import { RecipeDisplayModeEnum } from './RecipeTypes';

interface RecipeItemProps extends Recipe {
    displayMode?: RecipeDisplayModeEnum;
    currentCategory: string;
    currentSubCategory: string;
}

export const RecipeItem = (props: RecipeItemProps) => {
    const {
        image,
        title,
        description,
        likes,
        bookmarks,
        category,
        id,
        currentCategory,
        currentSubCategory,
        subcategory,
    } = props;
    const { getMenuCategoryById } = useMainMenu();
    const menuCategory = getMenuCategoryById(category[0]) as MenuCategory;
    const isMobile = useBreakpointValue({ base: true, lg: false });

    const navigate = useNavigate();

    const handleCookClick = () => {
        navigate(
            `/${currentCategory || category[0]}/${currentSubCategory || subcategory[0]}/${id}`,
        );
    };

    return (
        <Card variant='outline' direction='row' position='relative'>
            <Image
                src={image || ''}
                alt={title}
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
                    bookmarks={bookmarks}
                    bgColor='#ffffd3;'
                />
                <RecipeTitle>{title}</RecipeTitle>
                {!isMobile && <RecipeDescription description={description} />}
                <RecipeControl onCookClick={handleCookClick} />
            </Stack>
        </Card>
    );
};
