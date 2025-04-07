import { Box } from '@chakra-ui/react';

import { BlogCard } from './BlogCard';
import { blogData } from './BlogData';

export const BlogList = () => (
    <Box display='flex' flexDirection='row' gap={4} p='24px 0'>
        {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
        ))}
    </Box>
);
