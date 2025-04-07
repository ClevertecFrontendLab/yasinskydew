import { Box, Flex, Text } from '@chakra-ui/react';

import { MenuCategory } from '../../store/menu-slice';
import { BookmarkFavorite, BookmarkLike } from '../Bookmark/Bookmark';
import { CustomIcon } from '../Layout/CustomIcon';

type Size = 'sm' | 'md' | 'lg';

interface RecipeFooterProps {
    menuItem: MenuCategory;
    likes?: number;
    favorites?: number;
    size?: Size;
    bgColor?: string;
}

export const RecipeFooter = ({
    menuItem,
    likes,
    favorites,
    size = 'md',
    bgColor = 'var(--lime200-color)',
}: RecipeFooterProps) => {
    const sizeStyles = {
        sm: {
            padding: '2px 6px',
            fontSize: 'sm',
            iconSize: '14px',
        },
        md: {
            padding: '4px 8px',
            fontSize: 'md',
            iconSize: '16px',
        },
        lg: {
            padding: '6px 10px',
            fontSize: 'lg',
            iconSize: '20px',
        },
    };

    const currentStyle = sizeStyles[size];

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
            <Box
                display='flex'
                alignItems='center'
                gap={size === 'sm' ? 1 : size === 'lg' ? 3 : 2}
                bgColor={bgColor}
                borderRadius={4}
                p={currentStyle.padding}
                fontSize={currentStyle.fontSize}
            >
                <CustomIcon
                    src={menuItem.icon}
                    alt={menuItem.name}
                    width={currentStyle.iconSize}
                    height={currentStyle.iconSize}
                />
                <Text fontSize='14px'>{menuItem.name}</Text>
            </Box>
            <Flex gap={size === 'sm' ? 1 : size === 'lg' ? 3 : 2}>
                {likes && <BookmarkLike count={likes} />}
                {favorites && <BookmarkFavorite count={favorites} />}
            </Flex>
        </Box>
    );
};
