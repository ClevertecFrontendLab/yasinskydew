import { Box } from '@chakra-ui/react';

import { useMainMenu } from '~/store/hooks';
import { MenuCategory, SubCategory } from '~/store/menu-slice';

import { MenuItem } from './MenuItem';

interface MenuListProps {
    onClose?: () => void;
}

export const MenuList = ({ onClose }: MenuListProps) => {
    const { categories, selectCategory, selectSubCategory, selectedCategory } = useMainMenu();

    const handleCategoryClick = (category: MenuCategory) => {
        selectCategory(category.id === selectedCategory?.id ? null : category);
    };

    const handleSubCategoryClick = (category: MenuCategory, subCategory: SubCategory) => {
        selectCategory(category);
        selectSubCategory(subCategory);
        if (onClose) {
            onClose();
        }
    };

    return (
        <Box as='nav' mt={{ base: '16px', xl: '38px' }} width='90%'>
            {categories.map((category) => (
                <MenuItem
                    key={category.id}
                    {...category}
                    isExpanded={selectedCategory?.id === category.id}
                    onCategoryClick={handleCategoryClick}
                    onSubCategoryClick={handleSubCategoryClick}
                />
            ))}
        </Box>
    );
};
