import { Box, Flex, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string | null;
    link: string;
}

export const Profile = ({ author }: { author: Author }) => (
    <Box display='flex' alignItems='center' gap={3}>
        <Avatar
            name={`${author.firstName} ${author.lastName}`}
            src={author.avatar ?? undefined}
            borderRadius='full'
            width='48px'
            height='48px'
        />
        <Flex flexDirection='column' align='flex-start'>
            <Text fontSize='18px' fontWeight='500' fontFamily='var(--font-family)'>
                {author.firstName} {author.lastName}
            </Text>
            <Text fontSize='14px' fontWeight='400' fontFamily='var(--font-family)'>
                {author.link}
            </Text>
        </Flex>
    </Box>
);
