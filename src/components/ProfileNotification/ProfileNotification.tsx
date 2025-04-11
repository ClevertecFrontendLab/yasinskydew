import { Box, useBreakpointValue } from '@chakra-ui/react';

import BsBookmarkHeart from '../../assets/BookMark/BsBookmarkHeart.svg';
import BsEmojiHeartEyes from '../../assets/BookMark/BsEmojiHeartEyes.svg';
import BsPeopleFill from '../../assets/BookMark/BsPeopleFill.svg';
import { CustomIcon } from '../Layout/CustomIcon';
import ProfileNotificationCard from './ProfileNotificationCard';

export default function ProfileNotification() {
    const isMobile = useBreakpointValue({ base: true, lg: false });

    const notifications = [
        {
            icon: <CustomIcon src={BsBookmarkHeart} alt='bookmarks' />,
            alt: 'bookmarks',
            count: 185,
        },
        {
            icon: <CustomIcon src={BsPeopleFill} alt='likes' />,
            alt: 'likes',
            count: 587,
        },
        {
            icon: <CustomIcon src={BsEmojiHeartEyes} alt='popularity' />,
            alt: 'popularity',
            count: 589,
        },
    ];

    return (
        <Box p={4}>
            <Box
                display='flex'
                flexDirection={isMobile ? 'row' : 'column'}
                gap={isMobile ? 4 : '24px'}
            >
                {notifications.map((notification) => (
                    <ProfileNotificationCard key={notification.alt} {...notification} />
                ))}
            </Box>
        </Box>
    );
}
