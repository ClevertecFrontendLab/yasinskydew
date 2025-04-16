import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';

import { MenuCategory } from '../../store/menu-slice';
import { CustomBadge } from '../Badge/Badge';
import { BookmarkFavorite, BookmarkLike } from '../Bookmark/Bookmark';

type Size = 'sm' | 'md' | 'lg';

interface RecipeFooterProps {
    likes?: number;
    bookmarks?: number;
    size?: Size;
    bgColor?: string;
    isRelevantKichen?: boolean;
    menuCategory: MenuCategory;
}

export const RecipeFooter = (props: RecipeFooterProps) => {
    const {
        menuCategory,
        likes,
        bookmarks,
        size = 'md',
        bgColor = 'var(--lime200-color)',
        isRelevantKichen = false,
    } = props;
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
                {bookmarks && <BookmarkFavorite count={bookmarks} />}
                {likes && <BookmarkLike count={likes} />}
            </Flex>
        </Box>
    );
};
