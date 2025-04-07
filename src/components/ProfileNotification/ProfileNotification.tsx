import { Box, VStack } from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes, BsPeopleFill } from 'react-icons/bs';

import ProfileNotificationCard from './ProfileNotificationCard';

export default function ProfileNotification() {
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
            <VStack align='start' spacing='24px'>
                {notifications.map((notification) => (
                    <ProfileNotificationCard key={notification.alt} {...notification} />
                ))}
            </VStack>
        </Box>
    );
}
