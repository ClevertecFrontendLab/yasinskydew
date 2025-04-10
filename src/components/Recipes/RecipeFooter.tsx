import { Box, Flex } from '@chakra-ui/react';

import { MenuCategory } from '../../store/menu-slice';
import { CustomBadge } from '../Badge/Badge';
import { BookmarkFavorite, BookmarkLike } from '../Bookmark/Bookmark';

type Size = 'sm' | 'md' | 'lg';

interface RecipeFooterProps {
    menuCategory: MenuCategory;
    likes?: number;
    favorites?: number;
    size?: Size;
    bgColor?: string;
}

export const RecipeFooter = ({
    menuCategory,
    likes,
    favorites,
    size = 'md',
    bgColor = 'var(--lime200-color)',
}: RecipeFooterProps) => {
    const sizeStyles = {
        sm: {
            padding: '2px 6px',
            fontSize: 'sm',
            iconSize: '18px',
            bgColor: 'var(--lime150-color)',
        },
        md: {
            padding: '4px 8px',
            fontSize: 'md',
            iconSize: '18px',
            bgColor: 'var(--lime150-color)',
        },
        lg: {
            padding: '6px 10px',
            fontSize: 'lg',
            iconSize: '20px',
            bgColor: 'var(--lime150-color)',
        },
    };

    const currentStyle = sizeStyles[size];

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
            <CustomBadge
                bgColor={bgColor}
                icon={menuCategory.icon}
                iconSize={currentStyle.iconSize}
                fontSize={currentStyle.fontSize}
            >
                {menuCategory.name}
            </CustomBadge>
            <Flex gap={size === 'sm' ? 1 : size === 'lg' ? 3 : 2}>
                {likes && <BookmarkLike count={likes} />}
                {favorites && <BookmarkFavorite count={favorites} />}
            </Flex>
        </Box>
    );
};
