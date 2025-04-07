import { Box } from '@chakra-ui/react';

import { menuCategories } from './MenuData';
import { MenuItem } from './MenuItem';
export const MenuList = () => (
    <Box>
        {menuCategories.map((category) => (
            <MenuItem key={category.id} {...category} />
        ))}
    </Box>
);
