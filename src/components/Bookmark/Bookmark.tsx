import { Box, Text } from '@chakra-ui/react';

import BsBookmarkHeart from '../../assets/BookMark/BsBookmarkHeart.svg';
import BsEmojiHeartEyes from '../../assets/BookMark/BsEmojiHeartEyes.svg';
import { CustomIcon } from '../Layout/CustomIcon';

interface BookmarkProps {
    icon: string;
    count: number;
}

interface BookmarkLikeProps extends Omit<BookmarkProps, 'icon'> {}

interface BookmarkFavoriteProps extends Omit<BookmarkProps, 'icon'> {}

export const Bookmark = ({ icon, count }: BookmarkProps) => (
    <Box display='flex' alignItems='center' gap={2} justifyContent='space-between'>
        <CustomIcon src={icon} alt='bookmark' />
        <Text color='var(--lime600-color)'>{count}</Text>
    </Box>
);

export const BookmarkLike = ({ count }: BookmarkLikeProps) => (
    <Bookmark icon={BsEmojiHeartEyes} count={count} />
);

export const BookmarkFavorite = ({ count }: BookmarkFavoriteProps) => (
    <Bookmark icon={BsBookmarkHeart} count={count} />
);
