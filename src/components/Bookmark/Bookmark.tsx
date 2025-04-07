import { Box, Text } from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes } from 'react-icons/bs';

interface BookmarkProps {
    icon: React.ReactNode;
    count: number;
}

interface BookmarkLikeProps extends Omit<BookmarkProps, 'src'> {}

interface BookmarkFavoriteProps extends Omit<BookmarkProps, 'src'> {}

export const Bookmark = ({ icon, count }: BookmarkProps) => (
    <Box display='flex' alignItems='center' gap={2} justifyContent='space-between'>
        {icon}
        <Text color='var(--lime600-color)'>{count}</Text>
    </Box>
);

export const BookmarkLike = ({ count }: BookmarkLikeProps) => (
    <Bookmark icon={<BsEmojiHeartEyes />} count={count} />
);

export const BookmarkFavorite = ({ count }: BookmarkFavoriteProps) => (
    <Bookmark icon={<BsBookmarkHeart />} count={count} />
);
