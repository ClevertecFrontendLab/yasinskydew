import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { useMainMenu } from '~/store/hooks';

import { MenuCategory } from '../../store/menu-slice';
import { Recipe } from '../../store/recipe-slice';
import { RecipeItem } from '../Recipes/RecipeItem';
import { MenuModeEnum, RecipeDisplayModeEnum } from '../Recipes/RecipeTypes';
import { RelevantKichenCard } from './RelevantKichenCard';

export const RelevantKichen = () => {
    const { getMenuCategoryById } = useMainMenu();
    const recipes: Recipe[] = [
        {
            id: 1,
            name: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            description:
                'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
            menuItem: getMenuCategoryById(4) as MenuCategory,
            likes: 1,
            favorites: 1,
            image: '',
            createdAt: new Date(),
        },
        {
            id: 2,
            name: 'Капустные котлеты',
            description:
                'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
            menuItem: getMenuCategoryById(4) as MenuCategory,
            likes: 1,
            favorites: 2,
            image: '',
            createdAt: new Date(),
        },
    ];

    const relevantKichen = {
        title: 'Веганская кухня',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
    };

    const relevantKichenCards: Recipe[] = [
        {
            name: 'Стейк для вегетарианцев',
            description:
                'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
            image: '',
            menuItem: getMenuCategoryById(4) as MenuCategory,
            likes: 1,
            favorites: 1,
            createdAt: new Date(),
            id: 1,
        },
        {
            name: 'Котлеты из гречки и фасоли',
            description:
                'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
            image: '',
            menuItem: getMenuCategoryById(4) as MenuCategory,
            likes: 1,
            favorites: 1,
            createdAt: new Date(),
            id: 2,
        },
        {
            name: 'Сырный суп с лапшой и брокколи',
            description:
                'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
            image: '',
            menuItem: getMenuCategoryById(3) as MenuCategory,
            likes: 1,
            favorites: 1,
            createdAt: new Date(),
            id: 3,
        },
    ];

    return (
        <Box width='100%' borderTop='1px solid #E0E0E0' pt='24px'>
            <Box display='grid' gridTemplateColumns='1fr 1fr' gap={4}>
                <Heading
                    fontSize='48px'
                    fontWeight='500'
                    fontFamily='var(--font-family)'
                    textAlign='left'
                >
                    {relevantKichen.title}
                </Heading>
                <Text
                    fontSize='16px'
                    fontWeight='500'
                    fontFamily='var(--font-family)'
                    align='left'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    {relevantKichen.description}
                </Text>
            </Box>
            <Box display='grid' gridTemplateColumns='1fr 1fr' gap={4}>
                <Box display='flex' gap={4}>
                    {recipes.map((recipe) => (
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
                    {relevantKichenCards.map((recipe) => (
                        <RelevantKichenCard key={recipe.id} {...recipe} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
