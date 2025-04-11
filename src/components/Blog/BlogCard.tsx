import { Box, Text } from '@chakra-ui/react';

import { Profile } from '../Profile/Profile';
import { BlogData } from './BlogData';

export const BlogCard = (blog: BlogData) => (
    <Box
        display='flex'
        flexDirection='column'
        gap={4}
        bgColor='white'
        p={{ base: '16px', lg: '16px 24px' }}
        borderRadius={5}
    >
        <Profile author={blog.author} />
        <Text align='left' noOfLines={3}>
            {blog.text}
        </Text>
    </Box>
);
