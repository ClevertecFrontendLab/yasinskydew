import { Box, Text } from '@chakra-ui/react';

import bookmarkFavoriteIcon from '../../assets/BookmarkIcons/bookmark-favorite.png';
import bookmarkLikeIcon from '../../assets/BookmarkIcons/bookmark-like.png';
import { CustomIcon } from '../Layout/CustomIcon';

interface BookmarkProps {
    src: string;
    alt: string;
    count: number;
}

interface BookmarkLikeProps extends Omit<BookmarkProps, 'src'> {}

interface BookmarkFavoriteProps extends Omit<BookmarkProps, 'src'> {}

export const Bookmark = ({ src, alt, count }: BookmarkProps) => (
    <Box display='flex' alignItems='center' gap={2} justifyContent='space-between'>
        <CustomIcon src={src} alt={alt} />
        <Text color='var(--lime600-color)'>{count}</Text>
    </Box>
);

export const BookmarkLike = ({ alt, count }: BookmarkLikeProps) => (
    <Bookmark src={bookmarkLikeIcon} alt={alt} count={count} />
);

export const BookmarkFavorite = ({ alt, count }: BookmarkFavoriteProps) => (
    <Bookmark src={bookmarkFavoriteIcon} alt={alt} count={count} />
);
