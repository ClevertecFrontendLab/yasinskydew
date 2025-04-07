import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, Text } from '@chakra-ui/react';

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
    const { name, icon, id, subCategories, isExpanded, onCategoryClick, onSubCategoryClick } =
        props;
    const { selectedCategory, selectedSubCategory } = useMainMenu();

    const handleClick = () => {
        onCategoryClick(props);
    };

    const handleSubCategoryClick = (subCategory: SubCategory) => {
        onSubCategoryClick(props, subCategory);
    };

    return (
        <Box width='100%'>
            <Box
                key={id}
                padding='8px 16px'
                display='flex'
                alignItems='center'
                cursor='pointer'
                justifyContent='space-between'
                width='100%'
                onClick={handleClick}
                bg={selectedCategory?.id === id ? 'var(--lime100-color)' : 'transparent'}
            >
                <Flex alignItems='center' gap={3}>
                    <CustomIcon src={icon} alt={name} />
                    <Text fontSize='16px' fontWeight='500' color='var(--text-color-secondary)'>
                        {name}
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
                    {subCategories.map((subCategory) => (
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
