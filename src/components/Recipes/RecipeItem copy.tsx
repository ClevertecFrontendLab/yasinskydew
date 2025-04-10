import { Box, Image, VStack } from '@chakra-ui/react';

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

export const RecipeItem = ({
    displayMode = RecipeDisplayModeEnum.NORMAL,
    noImage = false,
    noControl = false,
    menuMode = MenuModeEnum.NORMAL,
    ...recipe
}: RecipeItemProps) => {
    const { image, name, description, menuCategory, likes, favorites } = recipe;

    const getMenuColor = () => {
        if (menuMode === MenuModeEnum.SECONDARY) {
            return 'var(--lime50-color)';
        }
        return 'var(--lime200-color)';
    };

    const modeStyles = {
        compact: {
            maxWidth: '240px',
            imageHeight: '160px',
            gridTemplateColumns: '1fr',
        },
        normal: {
            maxWidth: '322px',
            imageHeight: '200px',
            gridTemplateColumns: '1fr',
        },
        detailed: {
            maxWidth: '100%',
            imageHeight: '244px',
            gridTemplateColumns: '1fr 1fr',
        },
    };

    const currentStyle = modeStyles[displayMode];

    return (
        <Box
            borderRadius='lg'
            overflow='hidden'
            border='1px solid #E0E0E0'
            _hover={{ transition: 'transform 0.2s' }}
            maxW={currentStyle.maxWidth}
        >
            <VStack
                align='stretch'
                display='grid'
                gridTemplateColumns={currentStyle.gridTemplateColumns}
            >
                {!noImage && (
                    <Image
                        src={image || ''}
                        alt={name}
                        objectFit='cover'
                        height={currentStyle.imageHeight}
                        width='100%'
                    />
                )}
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                    justifyContent='space-between'
                    p='24px'
                    maxW='322px'
                >
                    <Box order={2}>
                        {' '}
                        <RecipeTitle title={name} />
                    </Box>
                    <Box order={3}>
                        {' '}
                        <RecipeDescription description={description} />
                    </Box>
                    {!noControl && (
                        <Box width='100%' order={4}>
                            {' '}
                            <RecipeControl />
                        </Box>
                    )}
                    <Box width='100%' order={!noControl ? 1 : 5}>
                        <RecipeFooter
                            menuCategory={menuCategory}
                            likes={likes}
                            favorites={favorites}
                            bgColor={getMenuColor()}
                        />
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};
