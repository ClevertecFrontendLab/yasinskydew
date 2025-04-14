import { Box, Text } from '@chakra-ui/react';
export default function ProfileNotificationCard({
    icon,
    count,
}: {
    icon: React.ReactNode;
    count: number;
}) {
    return (
        <Box display='flex' alignItems='center' gap='8px'>
            {icon}
            <Text fontSize='16px' fontWeight='600' color='var(--lime600-color)'>
                {count}
            </Text>
        </Box>
    );
}
