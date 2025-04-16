import { Box, Heading, Text } from '@chakra-ui/react';

import { MenuCategory } from '../../store/menu-slice';
import { Recipe } from '../../store/recipe-slice';
import { RelevantKichenCard } from './RelevantKichenCard';
import { RelevantRecipeCard } from './RelevantRecipeCard';

interface RelevantKichenProps {
    menuCategory: MenuCategory;
    recipes: Recipe[];
}

export const RelevantKichen = (props: RelevantKichenProps) => {
    const { menuCategory, recipes } = props;

    return (
        <Box
            width='100%'
            borderTop='1px solid #E0E0E0'
            pt='24px'
            display='flex'
            flexDirection='column'
            gap={4}
        >
            <Box
                display={{
                    base: 'flex',
                    md: 'grid',
                }}
                gridTemplateColumns={{
                    md: '1fr 1fr',
                    lg: '1fr 2fr',
                    '2xl': '1fr 1fr',
                }}
                flexDirection={{ base: 'column' }}
                gap={4}
            >
                <Heading
                    fontSize={{ base: '24px', md: '36px', lg: '48px' }}
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
            <Box
                display={{
                    base: 'flex',
                    md: 'grid',
                    lg: 'flex',
                    xl: 'grid',
                }}
                gridTemplateColumns={{
                    md: '2fr 1fr',
                    '2xl': '1fr 1fr',
                }}
                flexDirection='column'
                gap={2}
            >
                <Box
                    display={{
                        base: 'flex',
                        md: 'grid',
                    }}
                    gridTemplateColumns={{
                        sm: '1fr 1fr',
                    }}
                    flexDirection='column'
                    gap={2}
                >
                    {recipes.slice(0, 2).map((recipe) => (
                        <RelevantRecipeCard key={recipe.id} menuCategory={menuCategory}>
                            {recipe}
                        </RelevantRecipeCard>
                    ))}
                </Box>
                <Box display='flex' gap={2} flexDirection='column'>
                    {recipes.slice(2, 5).map((recipe) => (
                        <RelevantKichenCard key={recipe.id} menuCategory={menuCategory}>
                            {recipe}
                        </RelevantKichenCard>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
