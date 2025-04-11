import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { useBreadcrumbs } from '~/store/hooks';
import { Recipe } from '~/store/recipe-slice';

import { RecipeItem } from './RecipeItem';
import { RecipeDisplayModeEnum, RecipeListMode } from './RecipeTypes';

interface RecipeListProps {
    recipes: Recipe[];
    mode: RecipeListMode;
}

export const RecipeList = (props: RecipeListProps) => {
    const { recipes, mode } = props;
    const displayMode = useBreakpointValue<RecipeDisplayModeEnum>({
        base: RecipeDisplayModeEnum.COMPACT,
        sm: RecipeDisplayModeEnum.NORMAL,
        lg: RecipeDisplayModeEnum.DETAILED,
    });

    const navigate = useNavigate();
    const { setBreadcrumbItems } = useBreadcrumbs();

    async function loadMoreRecipes() {
        navigate('/juiciest');
        setBreadcrumbItems([
            {
                label: 'Главная',
                path: '/',
            },
            {
                label: 'Самое сочное',
                path: '/juiciest',
            },
        ]);
    }

    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <VStack spacing={5}>
            {mode === RecipeListMode.PREVIEW && (
                <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                    <Heading textAlign='start'>Самое сочное</Heading>
                    {!isMobile && (
                        <Button
                            bgColor='var(--lime400-color)'
                            color='var(--text-color-secondary)'
                            _hover={{
                                bgColor: 'var(--lime600-color)',
                                color: 'var(--lime400-color)',
                            }}
                            alignSelf='center'
                            rightIcon={<ArrowForwardIcon />}
                            onClick={loadMoreRecipes}
                        >
                            Вся подборка
                        </Button>
                    )}
                </Box>
            )}
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
                {recipes.slice(0, 8).map((recipe) => (
                    <RecipeItem
                        key={recipe.id}
                        {...recipe}
                        displayMode={displayMode || RecipeDisplayModeEnum.NORMAL}
                    />
                ))}
            </Box>
            {[RecipeListMode.JUICIEST].includes(mode) && (
                <Button
                    bgColor='var(--lime400-color)'
                    color='var(--text-color-secondary)'
                    alignSelf='center'
                    onClick={() => {
                        console.log('click');
                    }}
                >
                    Загрузить ещё
                </Button>
            )}
            {mode === RecipeListMode.PREVIEW && isMobile && (
                <Button
                    bgColor='var(--lime400-color)'
                    color='var(--text-color-secondary)'
                    _hover={{ bgColor: 'var(--lime600-color)', color: 'var(--lime400-color)' }}
                    alignSelf='center'
                    rightIcon={<ArrowForwardIcon />}
                    onClick={loadMoreRecipes}
                >
                    Вся подборка
                </Button>
            )}
        </VStack>
    );
};
