import { Box, useBreakpointValue } from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes, BsPeopleFill } from 'react-icons/bs';

import ProfileNotificationCard from './ProfileNotificationCard';

export default function ProfileNotification() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const notifications = [
        {
            icon: <BsBookmarkHeart />,
            alt: 'bookmarks',
            count: 185,
        },
        {
            icon: <BsPeopleFill />,
            alt: 'likes',
            count: 587,
        },
        {
            icon: <BsEmojiHeartEyes />,
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
