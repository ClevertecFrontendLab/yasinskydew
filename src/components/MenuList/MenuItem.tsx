import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { useMainMenu } from '~/store/hooks';
import { MenuCategory, SubCategory } from '~/store/menu-slice';

import { CustomIcon } from '../Layout/CustomIcon';
import { SubCategoryItem } from './SubCategoryItem';

interface MenuItemProps extends MenuCategory {
    isExpanded: boolean;
    onCategoryClick: (category: MenuCategory) => void;
    onSubCategoryClick: (category: MenuCategory, subCategory: SubCategory) => void;
}

export const MenuItem = (props: MenuItemProps) => {
    const { onCategoryClick, onSubCategoryClick, isExpanded, ...category } = props;
    const { selectedCategory, selectedSubCategory } = useMainMenu();
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onCategoryClick(category);
    };

    const handleSubCategoryClick = (subCategory: SubCategory) => {
        onSubCategoryClick(category, subCategory);
        navigate(`/menu/${category.id}/${subCategory.id}`);
    };

    return (
        <Box>
            <Box
                key={category.id}
                padding='8px 16px'
                display='flex'
                alignItems='center'
                cursor='pointer'
                justifyContent='space-between'
                onClick={handleClick}
                bg={selectedCategory?.id === category.id ? 'var(--lime100-color)' : 'transparent'}
            >
                <Flex alignItems='center' gap={3}>
                    <CustomIcon src={category.icon} alt={category.name} />
                    <Text fontSize='16px' fontWeight='500' color='var(--text-color-secondary)'>
                        {category.name}
                    </Text>
                </Flex>
                <ChevronDownIcon
                    height='16px'
                    width='16px'
                    transform={isExpanded ? 'rotate(180deg)' : 'none'}
                    transition='transform 0.2s'
                />
            </Box>
            <Collapse in={isExpanded}>
                <Box>
                    {category.subCategories.map((subCategory) => (
                        <SubCategoryItem
                            key={subCategory.id}
                            subCategory={subCategory}
                            isSelected={selectedSubCategory?.id === subCategory.id}
                            onClick={handleSubCategoryClick}
                        />
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
};
