import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';

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
    isRelevantKichen?: boolean;
}

export const RecipeFooter = ({
    menuCategory,
    likes,
    favorites,
    size = 'md',
    bgColor = 'var(--lime200-color)',
    isRelevantKichen = false,
}: RecipeFooterProps) => {
    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
            <CustomBadge
                bgColor={bgColor}
                icon={menuCategory.icon}
                display={isMobile && !isRelevantKichen ? 'none' : 'flex'}
                position='relative'
                top='0'
                left='0'
            >
                {menuCategory.name}
            </CustomBadge>
            <Flex gap={size === 'sm' ? 1 : size === 'lg' ? 3 : 2}>
                {favorites && <BookmarkFavorite count={favorites} />}
                {likes && <BookmarkLike count={likes} />}
            </Flex>
        </Box>
    );
};
